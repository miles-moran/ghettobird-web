import React from "react";
import ReactMarkdown from 'react-markdown';
import { about } from "../data/md";
export default ({}) => {
  return (
    <div>
      <ReactMarkdown children={about}/>
    </div>
  );
};
