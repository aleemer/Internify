import React from "react";
import { ChipBasic } from "../../atoms/Chips";

const Feedback2 = ({ data }) => {
  const keyArray = Object.keys(data);
  return (
    <div className="feedback_page2_inner">
      <ul>
        {keyArray.map((x) => {
          if (x === "page1Students") {
            // Null
          } else {
            const msg = `${data[x]} students currently ${x} a job`;
            return (
              <li>
                {" "}
                <ChipBasic label={msg} />{" "}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Feedback2;
