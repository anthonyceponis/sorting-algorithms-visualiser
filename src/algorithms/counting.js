import { toggleNavSettings } from "../components/Sidenav";
import { updateDisplayedArray, updateEffects } from "../redux/actions";

export default async function countsort(arr, speed) {
  toggleNavSettings(false);
  let newBarEffects = {};

  let size = arr.length;
  let range = arr.length + 1;
  let s = 0;

  let aux = [];
  for (let i = 0; i < range; i++) aux[i] = 0;

  for (let i = 0; i < size; i++) {
    aux[arr[i]] += 1;
    await new Promise((resolve) => setTimeout(resolve, speed));
    newBarEffects = {};
    newBarEffects[i] = "red";
    updateEffects(newBarEffects);
  }

  for (let i = 0; i < range; i++) {
    for (let j = 0; j < aux[i]; j++) {
      arr[s] = i;
      s++;
      await new Promise((resolve) => setTimeout(resolve, speed));
      newBarEffects = {};
      newBarEffects[s] = "green";
      updateEffects(newBarEffects);
      updateDisplayedArray(arr);
    }
  }

  updateEffects({});
  toggleNavSettings(true);
}
