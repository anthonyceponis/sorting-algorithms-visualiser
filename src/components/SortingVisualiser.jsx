import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { generateArray, shuffle } from "../algorithms/generators";
import { useSelector } from "react-redux";
import { updateDisplayedArray } from "../redux/actions";

const SortingVisualiser = (props) => {
  const displayedArray = useSelector((state) => state.displayedArray);
  const effects = useSelector((state) => state.effects);
  const size = useSelector((state) => state.size);
  const algo = useSelector((state) => state.algo);
  const [barWidth, setBarWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      showNewArray();
    });
    document.getElementById(algo).checked = true;
  }, [props.location.pathname]);

  useEffect(() => {
    if (displayedArray.length === 0) {
      showNewArray();
    }
  });

  useEffect(() => {
    showNewArray();
  }, [size]);

  useEffect(() => {
    calcWidth();
  }, [displayedArray.length]);

  function showNewArray() {
    updateDisplayedArray(shuffle(generateArray(calcSize())));
  }

  function calcSize() {
    let x = Math.ceil((window.innerWidth * 0.45 * size) / 250);
    if (x < 10) x = 10;
    return x;
  }

  function calcWidth() {
    const x = window.innerWidth / displayedArray.length;
    setBarWidth(x);
  }

  function mapArray() {
    return displayedArray.map((item, index) => {
      let fraction = item / displayedArray.length;
      return (
        <li
          key={index}
          id={`sorting-visualiser-array-item-${index}`}
          style={{
            height: `${window.innerHeight * 0.6 * fraction + 50}px`,
            width: `${barWidth}px`,
            backgroundColor: effects[index],
          }}
        >
          <div style={{ display: barWidth > 30 ? "block" : "none" }}>
            {item}
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="sorting-visualiser-header">{algo}</h1>
      <ul className="sorting-visualiser">{mapArray()}</ul>
    </>
  );
};

export default withRouter(SortingVisualiser);
