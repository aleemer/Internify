import React from "react";
import { ChipNote } from "../../atoms/Chips";
import "./styles/Feedback.css";

const FinalReqStudents = ({ data }) => {
  const keyArray = Object.keys(data);
  return (
    <div className="feedback_page4_inner">
      <ul className="feedback_list">
        {keyArray.map((x) => {
          if (x === "academicReq") {
            const msg = `${data[x]} students also meet academic requirements`;
            return (
              <li key={x}>
                <ChipNote label={msg} />
              </li>
            );
          } else if (x === "page3Students") {
            // list refers to array of students within object
            const msg = `${data[x].length} total matches`;
            return (
              <li key={x}>
                <ChipNote label={msg} />
              </li>
            );
          } else {
            const msg = `${data[x]} students also meet ${x} requirements`;
            return (
              <li key={x}>
                <ChipNote label={msg} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default FinalReqStudents;