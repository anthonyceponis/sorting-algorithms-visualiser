import { toggleNavSettings } from "../components/Sidenav";
import { updateDisplayedArray, updateEffects } from "../redux/actions";

export default async function bubblesort(arr, speed) {
  let swapped;
  let newBarEffects;
  let end = arr.length - 1;
  toggleNavSettings(false);
  do {
    swapped = false;
    for (let i = 0; i < end; i++) {
      await new Promise((resolve) => setTimeout(resolve, speed));
      newBarEffects = {};
      newBarEffects[i] = "red";
      newBarEffects[i + 1] = "red";
      updateEffects(newBarEffects);
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        await new Promise((resolve) => setTimeout(resolve, speed));
        newBarEffects = {};
        newBarEffects[i] = "lightgreen";
        newBarEffects[i + 1] = "lightgreen";
        updateEffects(newBarEffects);
        updateDisplayedArray(arr);
        swapped = true;
      }
    }
    end--;
  } while (swapped);
  updateEffects({});
  toggleNavSettings(true);
}
