import { toggleNavSettings } from "../components/Sidenav";
import { updateDisplayedArray, updateEffects } from "../redux/actions";

async function merge(arr, speed, l, m, r) {
  let newBarEffects = {};

  let n1 = m - l + 1;
  let n2 = r - m;

  let L = [];
  let R = [];

  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (let i = 0; i < n2; i++) {
    R[i] = arr[m + 1 + i];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    newBarEffects = {};
    newBarEffects[k + i] = "red";
    newBarEffects[m + 1 + j] = "red";
    await new Promise((resolve) => setTimeout(resolve, speed));
    updateEffects(newBarEffects);
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      if (k <= r) {
        let temp = arr[k];
        arr[k] = R[j];
        arr[m + 1 + j] = temp;
      } else {
        arr[k] = R[j];
      }
      j++;
    }
    newBarEffects = {};
    newBarEffects[k] = "lightgreen";
    await new Promise((resolve) => setTimeout(resolve, speed));
    updateDisplayedArray([...arr]);
    updateEffects(newBarEffects);
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

export default async function mergesort(arr, speed) {
  toggleNavSettings(false);
  for (let curr_size = 1; curr_size < arr.length; curr_size *= 2) {
    for (
      let left_start = 0;
      left_start < arr.length - 1;
      left_start += 2 * curr_size
    ) {
      let mid = Math.min(left_start + curr_size - 1, arr.length - 1);
      let right_end = Math.min(left_start + 2 * curr_size - 1, arr.length - 1);

      await merge(arr, speed, left_start, mid, right_end);
    }
  }
  updateDisplayedArray([...arr]);
  updateEffects({});
  toggleNavSettings(true);
}
