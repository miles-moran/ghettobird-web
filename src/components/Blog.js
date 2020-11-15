import React, {useState, useEffect} from "react";
import ReactMarkdown from 'react-markdown';
import axios from "axios";
import blog from '../data/blog.md'
export default ({}) => {
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
      axios.get(blog).then(res => setMarkdown(res.data))
    }, []);
  return (
    <div>
      <ReactMarkdown children={markdown}/>
    </div>
  );
};
