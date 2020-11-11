import React, { useState, useEffect } from "react";
import JSONPretty from "react-json-pretty";
import axios from "axios";
import { generateGraphQL } from "../utils/ghetto";
import Graphicl from "./Graphicl";
import db from "../Config";
import { useParams } from "react-router-dom";
import Button from "./common/Button";
export default () => {
  const [blueprint, setBlueprint] = useState({});
  const { gid } = useParams();
  useEffect(() => {
    const temp = {};
    db.collection("blueprints")
      .doc(gid)
      .get()
      .then((res) => {
        setBlueprint(res.data());
        axios
          .post("http://127.0.0.1:5000/", res.data().blue, {})
          .then((res) => {
            setData(res.data);
            setGraph(generateGraphQL(res.data));
          });
      });
  }, []);

  const [data, setData] = useState({});
  const [graph, setGraph] = useState({});
  const [playground, setPlayground] = useState(false);

  if (playground) {
    return <Graphicl ql={graph} setPlayground={setPlayground} />;
  }

  return (
    <div>
      <div style={{ fontWeight: "bold" }}>Root URL</div>{" "}
      <a target="_blank" href={blueprint.url}>{blueprint.url}</a>
      <Button text="GraphiQL" click={() => setPlayground(true)} />
      <div style={{ fontWeight: "bold" }}>GhettoQL Blueprint</div>
      <JSONPretty data={blueprint.blue} />
      <div style={{ fontWeight: "bold" }}>Sample Data</div>
      <JSONPretty data={data} />
    </div>
  );
};
