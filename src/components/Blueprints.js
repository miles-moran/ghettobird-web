import React, { useState, useEffect } from "react";
import db from "../Config";
import Blueprint from "./Blueprint";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
export default ({}) => {
  let match = useRouteMatch();
  const [blueprints, setBlueprints] = useState([]);

  useEffect(() => {
    const blues = [];
    db.collection("blueprints")
      .get()
      .then((res) => res.forEach((r) => blues.push({ ...r.data(), gid: r.id })))
      .then(() => setBlueprints(blues));
    console.log(blues);
    // db.collection("blueprints").doc("gwVkQQYQBQcRpZ9d98Jr").update({
    //   blue: basic,
    // });
  }, []);
  return (
      <Switch>
        <Route path={`${match.path}/:gid`}>
          <Blueprint />
        </Route>
        <Route path={match.path}>
          Blueprints
          <ul>
            {blueprints.map((b, i) => (
              <li key={i}>
                <Link to={`${match.url}/${b.gid}`}>{b.url}</Link>
              </li>
              // <>
              //   {i !== 0 && <Blueprint key={i} blueprint={b}/>}
              //   </>
            ))}
          </ul>
        </Route>
      </Switch>
  );
};
