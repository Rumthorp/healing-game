export const getRhythmBarHeight = (currentRhythm, maxRhythm, maxBarHeight) => {
  return (currentRhythm / maxRhythm) * maxBarHeight;
};