import React from "react";
import { graphql } from "graphql";
import "graphiql/graphiql.min.css";
import GraphiQL from "graphiql";
export default ({ ql, setPlayground }) => {
  function graphQLFetcher(graphQLParams) {
    return graphql(
      ql.schema,
      graphQLParams.query,
      ql.root,
      graphQLParams.operationName,
      graphQLParams.variables
    );
  }
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <GraphiQL fetcher={graphQLFetcher} />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 100,
          margin: 25,
          height: 75,
          width: 75,
          background: "black",
          borderRadius: 100,
        }}
        onClick={() => setPlayground(false)}
      ></div>
    </div>
  );
};
