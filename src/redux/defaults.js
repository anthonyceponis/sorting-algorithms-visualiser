export function getDefualtSpeed() {
  let x = localStorage.getItem("speed");
  if (!x) x = 50;
  return x;
}

export function getDefualtSize() {
  let x = localStorage.getItem("size");
  if (!x) {
    x = 75;
    // x = Math.ceil((window.innerWidth * 0.45 * x) / 250);
    // if (x < 10) x = 10;
  }
  return x;
}

export function getDefualtAlgorithm() {
  let x = localStorage.getItem("algorithm");
  if (!x) x = "Bubble";
  return x;
}
