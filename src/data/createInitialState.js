import { generateInitialGooState } from './dataUtils'

export default () => {
  const initialState = {};
  initialState.goo = generateInitialGooState(16, 28)
  return initialState;
};