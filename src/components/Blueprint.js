import React, { useState, useEffect } from "react";
import JSONPretty from "react-json-pretty";
import axios from "axios";
import { generateGraphQL } from "../utils/ghetto";
import Graphicl from "./Graphicl";
export default ({ blueprint }) => {
  useEffect(() => {
    axios.post("http://127.0.0.1:5000/", blueprint.blue, {}).then((res) => {
      setData(res.data);
      setGraph(generateGraphQL(res.data));
    });
  }, []);
  const [data, setData] = useState({});
  const [graph, setGraph] = useState({});
  const [playground, setPlayground] = useState(false);

  if (playground){
      return <Graphicl ql={graph} setPlayground={setPlayground}/>
  }

  return (
    <div>
      <div style={{ fontWeight: "bold" }}>Root URL</div>{" "}
      <a href={blueprint.url}>{blueprint.url}</a>
      <div style={{ fontWeight: "bold" }}>GhettoQL Blueprint</div>
      <JSONPretty data={blueprint.blue} />
      <div style={{ fontWeight: "bold" }}>Sample Data</div>
      <JSONPretty data={data} />
      <div>
        <input type="button" value="GraphQL Playground" onClick={() => setPlayground(true)}/>
      </div>
    </div>
  );
};
