const fetch = require('node-fetch');
const fs = require('fs');
const util = require('util');
const { MusicFileNames } = require('../src/static/names');

const googleApiKey = 'AIzaSyDKRbaDknOlU_KSZWaErvYT783E8agfu6Q';
const sheetId = '1zk0j_2_jRgxz3p9BXGJ6udvULcDZRWXbOKKVhboEUr0'

const generateUrl = (id, category) => {
  return `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${encodeURI(category)}/?key=${googleApiKey}`;
};

const deleteAndWrite = (path, array) => {
  try {
  fs.unlinkSync(path);
  } catch(error) {
    console.log(error);
  }

  try {
    fs.writeFileSync(path, 'export default ' + JSON.stringify(array), 'utf-8');
  } catch(error) {
    console.log(error);
  }
};

const formatSongName = (range) => {
  return range.match(/\'(.*?)\'/);
};

const formatMarkers = (markerArray) => {
  return markerArray.map(stringInArray => {
    let splitString = stringInArray[0].split(':');
    return (splitString[0] === '0' ? 0 : parseInt(splitString[0]) * 60) + parseFloat(splitString[1]);
  });
};

const buildData = async () => {
  const responses = await Promise.all(
    Object.keys(MusicFileNames).map(name => fetch(generateUrl(sheetId, name)))
  );
  const markerData = await Promise.all(responses.map(response => response.json()));
  const basePath = 'src/scenes/battle/conductor/tracks/markers/';
  markerData.forEach(markerJson => {
    deleteAndWrite(basePath + `${formatSongName(markerJson.range)[1]}.js`, formatMarkers(markerJson.values));
  });
};

buildData();