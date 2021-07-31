import store from "./store";

export function updateDisplayedArray(arr) {
  store.dispatch({
    type: "UPDATE_DISPLAYED_ARRAY",
    payload: {
      arr,
    },
  });
}

export function updateEffects(effects) {
  store.dispatch({
    type: "UPDATE_EFFECTS",
    payload: { effects },
  });
}

export function updateSize(size) {
  localStorage.setItem("size", size);
  store.dispatch({
    type: "UPDATE_SIZE",
    payload: { size },
  });
}

export function updateSpeed(e) {
  const speed = parseInt(e.target.value);
  localStorage.setItem("speed", speed);
  store.dispatch({
    type: "UPDATE_SPEED",
    payload: { speed },
  });
}

export function updateAlgo(e) {
  const algo = e.target.id;
  localStorage.setItem("algorithm", algo);
  store.dispatch({
    type: "UPDATE_ALGO",
    payload: { algo },
  });
}

export function toggleSidenav(toggle) {
  store.dispatch({
    type: "TOGGLE_SIDENAV",
    payload: { toggle },
  });
}
