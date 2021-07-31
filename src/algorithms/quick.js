import { toggleNavSettings } from "../components/Sidenav";
import { updateDisplayedArray, updateEffects } from "../redux/actions";

async function partition(arr, speed, l, r) {
  let b = l - 1;
  let p = arr[r];
  let temp;
  let newBarEffects = {};

  for (let i = l; i <= r; i++) {
    await new Promise((resolve) => setTimeout(resolve, speed));
    newBarEffects = {};
    newBarEffects[i] = "red";
    newBarEffects[b] = "red";
    newBarEffects[r] = "red";
    updateEffects(newBarEffects);
    if (arr[i] < p) {
      b++;
      temp = arr[b];
      arr[b] = arr[i];
      arr[i] = temp;
      await new Promise((resolve) => setTimeout(resolve, speed));
      newBarEffects = {};
      newBarEffects[b] = "lightgreen";
      newBarEffects[i] = "lightgreen";
      updateEffects(newBarEffects);
      updateDisplayedArray(arr);
    }
  }

  await new Promise((resolve) => setTimeout(resolve, speed));
  newBarEffects = {};
  newBarEffects[b] = "red";
  newBarEffects[r] = "red";
  b++;
  temp = arr[b];
  arr[b] = arr[r];
  arr[r] = temp;
  await new Promise((resolve) => setTimeout(resolve, speed));
  newBarEffects = {};
  newBarEffects[b] = "lightgreen";
  newBarEffects[r] = "lightgreen";
  updateEffects(newBarEffects);
  updateDisplayedArray(arr);
  return b;
}

async function quicksortrec(arr, speed, l, r) {
  if (l >= r) return;

  let b = await partition(arr, speed, l, r);
  await quicksortrec(arr, speed, l, b - 1);
  await quicksortrec(arr, speed, b + 1, r);
}

export default async function quicksort(arr, speed) {
  toggleNavSettings(false);

  await quicksortrec(arr, speed, 0, arr.length - 1);

  updateEffects({});
  toggleNavSettings(true);
}
