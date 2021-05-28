export default {
  music: 'DDRKirby(ISQ) - Illumination Reel-IntroShortened.mp3',
  onStart: () => {
    
  },
  events: [
    {
      trigger: .0001,
      event: () => {
        
      }
    },
    {
      trigger: 5,
      event: () => {
        console.log('hello from the conductor')
      }
    },
    {
      trigger: 10,
      event: () => {
        console.log('goodbye from the conductor')
      }
    }
  ]
}