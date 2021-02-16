import React, { useState, useEffect } from "react";
import ReactHtmlParser from 'react-html-parser';
import DOMPurify from "dompurify";

const Text = ({textObj}) => {
  const cleanContent = DOMPurify.sanitize(textObj.content, {FORBID_TAGS: ['img']});
  const [content, _setContent] = useState(cleanContent);
  const setContent = (content) => _setContent(DOMPurify.sanitize(content, {FORBID_TAGS: ['img']}));

  useEffect(() => {
    setContent(cleanContent);
  }, [cleanContent])

  return (
    <div className="ev-text-content">
      {ReactHtmlParser(content)}
    </div>
  )
}

export default Text
