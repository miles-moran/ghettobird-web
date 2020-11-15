import React, { useState } from "react";
import JSONInput from "react-json-editor-ajrm";
import Button from "./common/Button";
import axios from "axios";
import { generateGraphQL } from "../utils/ghetto";
import JSONPretty from "react-json-pretty";
export default ({}) => {
  const [queries, setQueries] = useState([]);
  const [data, setData] = useState({});
  const [graph, setGraph] = useState({});
  const def = {
    url: "",
    flightpath: {},
    options: {},
  };
  const [blueprint, setBlueprint] = useState(def);
  const findQueries = (text) => {
    const re = "{(.*?)}";
    const quer = [...text.matchAll(re)];
    const temp = [];
    quer.forEach((q) => temp.push(q[1]));
    setQueries(temp);
  };

  const handleGenerate = () => {
    console.log(blueprint);
    axios.post("http://127.0.0.1:5000/api", blueprint).then((res) => {
      setData(res.data);
      setGraph(generateGraphQL(res.data));
    });
  };
  console.log(graph)
  return (
    <div className="flex-columns">
      <div>
        <span style={{ fontWeight: "bold" }}>Create</span>
        <div>
          Sample URL:{" "}
          <span style={{ fontStyle: "italic" }}>
            https://www.ufc.com/athlete/rafael-dos-anjos
          </span>
        </div>
        <div>
          <input />
        </div>
        <div>
          Core URL:{" "}
          <span style={{ fontStyle: "italic" }}>
            https://www.ufc.com/athlete/{"{fighter_name}"}
          </span>
        </div>
        <div>
          <input onChange={(e) => findQueries(e.target.value)} />
        </div>
        <div>
          Description:{" "}
          <span style={{ fontStyle: "italic" }}>API for UFC fighter stats</span>
        </div>
        <div>
          <input />
        </div>
        <div>Blueprint:</div>
        <JSONInput
          placeholder={blueprint}
          onChange={(t) => setBlueprint(t.jsObject)}
        />
      </div>
      <div>
        {queries.length > 0 && (
          <>
            <div style={{ fontWeight: "bold" }}>Queries</div>
            <div>
              {queries.map((q) => (
                <div>{q}</div>
              ))}
            </div>
          </>
        )}
        <div>
          <Button text="Generate Schema" click={() => handleGenerate(true)} />
        </div>
        <JSONPretty data={data}/>
      </div>
    </div>
  );
};
