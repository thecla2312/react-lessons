import React, { useState } from "react";
import gamepad from "../assets/images/pad.jpg";
//react hook

const First = ({ firstName }) => {
  const [age, setAge] = useState(15);
  const title = "Use State";
  return (
    <div>
      <h1> {title} </h1>
      <h1>{age}</h1>
      <button onClick={() => setAge(age + 10)}>Increase AGE</button>
      <br />
      <img
        src="https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
        alt=""
      />

      <img className="gamepad" src={gamepad} alt="" />
    </div>
  );
};

export default First;