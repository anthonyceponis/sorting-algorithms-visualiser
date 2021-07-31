import { toggleNavSettings } from "../components/Sidenav";
import { updateDisplayedArray, updateEffects } from "../redux/actions";

export default async function selectionsort(arr, speed) {
  toggleNavSettings(false);
  let newBarEffects, temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        await new Promise((resolve) => setTimeout(resolve, speed));
        newBarEffects = {};
        newBarEffects[i] = "lightgreen";
        newBarEffects[j] = "red";
        updateEffects(newBarEffects);
        updateDisplayedArray(arr);
      }
    }
  }
  updateEffects({});
  toggleNavSettings(true);
}
