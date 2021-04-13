import buildMainMenuTicker from './mainMenu/mainMenuTicker';
import { MainMenuSceneName } from '../constants/constants';

class CreateTickerManager {
  constructor () {
    this.tickers = {
      scenes: {}
    };
    this.tickers.scenes[MainMenuSceneName] = buildMainMenuTicker();
  }

  resetTicker (tickerName) {
    if (tickerName === MainMenuSceneName) this.tickers.scenes[tickerName] = buildMainMenuTicker();
  }
}

const TickerManager = new CreateTickerManager();
export default TickerManager;