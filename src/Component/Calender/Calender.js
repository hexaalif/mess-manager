import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import checklist from "../../img/t-checking-box.jpg";

const Calender = () => {
  const [selected, setSelected] = useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div className="py-10">
      <h1 className="text-5xl text-orange-400 text-center pb-10">Calender</h1>
      <div className="card card-side bg-base-300 shadow-xl container mx-auto p-12">
        <figure>
          <img src={checklist} alt="Movie" />
        </figure>
        <div className="card-body text-center">
          <DayPicker
            className="mx-auto"
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
        </div>
      </div>
    </div>
  );
};

export default Calender;
