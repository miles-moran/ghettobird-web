import React, { useState, useEffect } from "react";
import JSONPretty from "react-json-pretty";
import axios from "axios";
import { generateGraphQL } from "../utils/ghetto";
import Graphicl from "./Graphicl";
import db from "../Config";
import { useParams } from "react-router-dom";
import Button from "./common/Button";
import { hasSelenium } from "../utils/hasSelenium";
import JSONInput from 'react-json-editor-ajrm';
export default () => {
  const [blueprint, setBlueprint] = useState({});
  const [data, setData] = useState(null);
  const [graph, setGraph] = useState({});
  const [playground, setPlayground] = useState(false);
  const [error, setError] = useState(null);
  const { gid } = useParams();
  // const apiLink = `https://ghettobird.herokuapp.com/api?gid=${gid}`;
  const apiLink = `http://127.0.0.1:5000/api?gid=${gid}`;
  console.log(apiLink);
  useEffect(() => {
    db.collection("blueprints")
      .doc(gid)
      .get()
      .then((res) => {
        setBlueprint(res.data());
        axios
          .get(apiLink)
          .then((res) => {
            setData(res.data);
            setGraph(generateGraphQL(res.data));
          })
          .catch((err) => {
            console.log(err);
            setError(err);
          });
      });
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <div>Loading</div>;
  }

  if (playground) {
    return <Graphicl ql={graph} setPlayground={setPlayground} />;
  }

  const selenium = hasSelenium(blueprint);

  return (
    <div>
      <div style={{ fontWeight: "bold" }}>Root URL</div>{" "}
      <div>{selenium && <div>Selenium</div>}</div>
      <a target="_blank" href={blueprint.url}>
        {blueprint.url}
      </a>
      <div style={{ fontWeight: "bold" }}>API Endpoint</div>{" "}
      <div>
        <a target="_blank" href={apiLink}>
          {apiLink}
        </a>
      </div>
      <Button text="GraphiQL" click={() => setPlayground(true)} />
      <div style={{ fontWeight: "bold" }}>GhettoQL Blueprint</div>
      <JSONPretty data={blueprint.blue} />
      <div style={{ fontWeight: "bold" }}>Sample Data</div>
      <JSONPretty data={data} />
    </div>
  );
};
