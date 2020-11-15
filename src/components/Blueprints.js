import React, { useState, useEffect } from "react";
import db from "../Config";
import Blueprint from "./Blueprint";
import { hasSelenium } from "../utils/hasSelenium";
import { elastic } from "../utils/highlight";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
export default ({}) => {
  let match = useRouteMatch();
  const [blueprints, setBlueprints] = useState([]);
  const [filter, setFilter] = useState();
  const [focus, setFocus] = useState();
  useEffect(() => {
    const blues = [];
    db.collection("blueprints")
      .get()
      .then((res) => res.forEach((r) => blues.push({ ...r.data(), gid: r.id })))
      .then(() => setBlueprints(blues));
  }, []);
  const filtered = elastic(filter, blueprints, [["url"], ["description"]]);
  return (
    <Switch>
      <Route path={`${match.path}/:gid`}>
        <Blueprint />
      </Route>
      <Route path={match.path}>
        <div className="flex-columns">
          <div className="container">
            <input
              placeholder="Search"
              className="input-search"
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <div>{filtered.length} results</div>

            <ul>
            <div className='warning-blue'>* API's marked by <span style={{color: "rgb(69, 177, 255)"}}>blue</span> use Selenium and are expiremental. They are slow and prone to crashes.</div>
              {filtered.map((b, i) => (
                <Link to={`${match.url}/${b.gid}`}>
                  <li
                    onMouseOver={() => setFocus(b)}
                    className={
                      hasSelenium(b.blue) ? "blueprint-li" : "pinkprint-li"
                    }
                    key={i}
                  >
                    <div>
                      <span style={{ fontWeight: "bold" }}>
                        {b.description}
                      </span>
                      {/* {hasSelenium(b.blue) && (
                        <span className="selenium-marker">selenium</span>
                      )} */}
                    </div>
                    <div>{b.url}</div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          {/* <div className='container focus-column'>
            {focus && (
              <div className="focus-container">
                <div style={{ fontWeight: "bold" }}>{focus.description}</div>
              </div>
            )}
          </div> */}
        </div>
      </Route>
    </Switch>
  );
};

// db.collection("blueprints").doc("x").update({
//   blue: bill,
// });
