import React, { useEffect, useRef } from 'react';
import E from "wangeditor";

const WangEditor = props => {
  const editor = useRef(null);

  useEffect(() => {
    editor.current = new E('#editor-root');
    Object.keys(props).forEach(prop => {
      if(prop.match(/^on[A-Za-z]+/)){
        const eventName = `on${prop[2].toLowerCase()}${prop.slice(3)}`;
        editor.current.config[eventName] = props[prop];
      } else {
        editor.current.config[prop] = props[prop]
      }
    });
    editor.current.create();
    editor.current.txt.html(props.value)
  }, [])
  return (
    <div id="editor-root"></div>
  )
}

export default WangEditor;