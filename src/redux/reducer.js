import {
  getDefualtSize,
  getDefualtAlgorithm,
  getDefualtSpeed,
} from "./defaults";

export default function reducer(
  state = {
    displayedArray: [],
    effects: {},
    size: getDefualtSize(),
    algo: getDefualtAlgorithm(),
    speed: getDefualtSpeed(),
    sidenavOpen: false,
  },
  action
) {
  const payload = action.payload;
  switch (action.type) {
    case "UPDATE_DISPLAYED_ARRAY":
      state.displayedArray = payload.arr;
      break;
    case "UPDATE_EFFECTS":
      state.effects = payload.effects;
      break;
    case "UPDATE_SIZE":
      state.size = payload.size;
      break;
    case "UPDATE_SPEED":
      state.speed = payload.speed;
      break;
    case "UPDATE_ALGO":
      state.algo = payload.algo;
      break;
    case "TOGGLE_SIDENAV":
      state.sidenavOpen = payload.toggle;
      break;
  }
  return state;
}
