import React from "react";
import puzzle1 from "../images/puzzle1.svg";
import puzzle2 from "../images/puzzle2.svg";
import puzzle3 from "../images/puzzle3.svg";
import puzzle4 from "../images/puzzle4.svg";

export default function ImagePuzzle() {
  return (
    <div className="puzzle-grid grid grid-cols-4 gap-4 h-[300px]">
      <div className="puzzle-item">
        <img
          src={puzzle1}
          alt="Puzzle 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="puzzle-item">
        <img
          src={puzzle2}
          alt="Puzzle 2"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="puzzle-item">
        <img
          src={puzzle4}
          alt="Puzzle 3"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="puzzle-item">
        <img
          src={puzzle3}
          alt="Puzzle 4"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
