import React from "react";
import ReactMarkdown from 'react-markdown';
import { blog } from "../data/md";
export default ({}) => {
  return (
    <div>
      <ReactMarkdown children={blog}/>
    </div>
  );
};
