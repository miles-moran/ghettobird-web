import React, {useState, useEffect} from "react";
import ReactMarkdown from 'react-markdown';
import axios from "axios";
import about from '../data/about.md'
export default ({}) => {
  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    axios.get(about).then(res => setMarkdown(res.data))
  }, []);
  return (
    <div className="container">
      <ReactMarkdown children={markdown}/>
    </div>
  );
};
