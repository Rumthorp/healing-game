import { generateInitialGooState } from './dataUtils'

export default () => {
  const initialState = {};
  initialState.goo = generateInitialGooState(19)
  return initialState;
};