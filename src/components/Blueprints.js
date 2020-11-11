import React, { useState, useEffect } from "react";
import db from "../Config";
import Blueprint from "./Blueprint";
export default ({}) => {
  const [blueprints, setBlueprints] = useState([]);
  useEffect(() => {
    const blues = [];
    db.collection("blueprints")
      .get()
      .then((res) => res.forEach((r) => blues.push(r.data())))
      .then(() => setBlueprints(blues));

    // db.collection("blueprints").doc("gwVkQQYQBQcRpZ9d98Jr").update({
    //   blue: basic,
    // });
  }, []);
  return (
    <div>
      Blueprints
      <div>
        {blueprints.map((b, i) => (
          <div key={i}>{b.url}</div>
          // <>
          //   {i !== 0 && <Blueprint key={i} blueprint={b}/>}
          //   </>
        ))}
      </div>
    </div>
  );
};
