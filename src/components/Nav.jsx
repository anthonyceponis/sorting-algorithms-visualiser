import React from "react";
import { toggleSidenav, updateDisplayedArray } from "../redux/actions";
import { useSelector } from "react-redux";
import bubblesort from "../algorithms/bubble";
import mergesort from "../algorithms/merge";
import selectionsort from "../algorithms/selection";
import insertionsort from "../algorithms/insertion";
import quicksort from "../algorithms/quick";
import countsort from "../algorithms/counting";
import { generateArray, shuffle } from "../algorithms/generators";

const Nav = () => {
  const displayedArray = useSelector((state) => state.displayedArray);
  const algo = useSelector((state) => state.algo);
  const speed = useSelector((state) => state.speed);
  const size = useSelector((state) => state.size);

  function sort() {
    switch (algo) {
      case "Bubble":
        return bubblesort(displayedArray, speed);
      case "Merge":
        return mergesort(displayedArray, speed);
      case "Selection":
        return selectionsort(displayedArray, speed);
      case "Insertion":
        return insertionsort(displayedArray, speed);
      case "Quick":
        return quicksort(displayedArray, speed);
      case "Counting":
        return countsort(displayedArray, speed);
    }
  }

  function showNewArray() {
    updateDisplayedArray(shuffle(generateArray(calcSize())));
  }

  function calcSize() {
    let x = Math.ceil((window.innerWidth * 0.45 * size) / 250);
    if (x < 10) x = 10;
    return x;
  }

  return (
    <div className="nav">
      <div>
        <ul>
          <li>
            <span className="nav-setting" onClick={() => toggleSidenav(true)}>
              Algorithm: {algo} Sort
            </span>
          </li>
          <li>
            <span className="nav-setting" onClick={() => toggleSidenav(true)}>
              Settings
            </span>
          </li>
          <li>
            <span
              className="nav-setting"
              onClick={() => {
                showNewArray();
              }}
            >
              Generate New Array
            </span>
          </li>
          <li>
            <span className="nav-setting" onClick={sort}>
              Sort!
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
