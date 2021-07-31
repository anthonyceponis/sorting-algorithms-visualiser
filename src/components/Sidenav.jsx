import React from "react";
import {
  updateSize,
  updateSpeed,
  updateAlgo,
  toggleSidenav,
} from "../redux/actions";
import { useSelector } from "react-redux";

export function toggleNavSettings(toggle) {
  const elements = document.querySelectorAll(".nav-setting");
  for (let element of elements) {
    if (toggle) element.style.cssText = "color: black; pointer-events: auto;";
    else element.style.cssText = "color: red !important; pointer-events: none;";
  }
}

const Sidenav = () => {
  const sidenavOpen = useSelector((state) => state.sidenavOpen);
  const speed = useSelector((state) => state.speed);
  const size = useSelector((state) => state.size);
  const displayedArray = useSelector((state) => state.displayedArray);

  return (
    <div>
      <div
        className="sidenav"
        style={{
          width: sidenavOpen ? "275px" : "0px",
        }}
      >
        <div className="sidenav-toggle-container">
          <div
            className="sidenav-toggle"
            onClick={() => toggleSidenav(false)}
          />
        </div>
        <div>
          <ul>
            <h3>Sorting Algorithm</h3>
            <li>
              <input
                type="radio"
                id="Bubble"
                name="sorting-algorithm"
                onChange={updateAlgo}
              />
              <label htmlFor="Bubble">Bubble</label>
            </li>
            <li>
              <input
                type="radio"
                id="Merge"
                name="sorting-algorithm"
                onChange={updateAlgo}
              />
              <label htmlFor="Merge">Merge</label>
            </li>
            <li>
              <input
                type="radio"
                id="Selection"
                name="sorting-algorithm"
                onChange={updateAlgo}
              />
              <label htmlFor="Selection">Selection</label>
            </li>
            <li>
              <input
                type="radio"
                id="Insertion"
                name="sorting-algorithm"
                onChange={updateAlgo}
              />
              <label htmlFor="Insertion">Insertion</label>
            </li>
            <li>
              <input
                type="radio"
                id="Quick"
                name="sorting-algorithm"
                onChange={updateAlgo}
              />
              <label htmlFor="Quick">Quick</label>
            </li>
            <li>
              <input
                type="radio"
                id="Counting"
                name="sorting-algorithm"
                onChange={updateAlgo}
              />
              <label htmlFor="Counting">Counting</label>
            </li>
          </ul>
          <ul>
            <li>
              <div className="slider">
                <div>Array Size</div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  defaultValue={size}
                  onChange={(e) => {
                    updateSize(parseInt(e.target.value), displayedArray);
                  }}
                />
              </div>
            </li>
            <li>
              <div className="slider">
                <div>Sorting Speed</div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  defaultValue={speed}
                  style={{ transform: "rotate(180deg)" }}
                  onChange={updateSpeed}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="sidenav-backdrop"
        style={{
          opacity: sidenavOpen ? 0.75 : 0,
          pointerEvents: sidenavOpen ? "auto" : "none",
        }}
        onClick={() => toggleSidenav(false)}
      />
    </div>
  );
};

export default Sidenav;
