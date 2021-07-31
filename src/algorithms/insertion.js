import { toggleNavSettings } from "../components/Sidenav";
import { updateDisplayedArray, updateEffects } from "../redux/actions";

export default async function insertionsort(arr, speed) {
  toggleNavSettings(false);
  let newBarEffects, temp;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      await new Promise((resolve) => setTimeout(resolve, speed));
      newBarEffects = {};
      newBarEffects[j] = "red";
      newBarEffects[j - 1] = "red";
      updateEffects(newBarEffects);
      if (arr[j - 1] > arr[j]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        await new Promise((resolve) => setTimeout(resolve, speed));
        newBarEffects = {};
        newBarEffects[j] = "lightgreen";
        newBarEffects[j - 1] = "lightgreen";
        updateEffects(newBarEffects);
        updateDisplayedArray(arr);
      } else break;
    }
  }
  updateEffects({});
  toggleNavSettings(true);
}
