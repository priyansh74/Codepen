import React from "react";
import { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = (data) => {
  
  
  const [isShown, setIsShown] = useState(true);
  
  const handleClick = event => {
    //element visibilty
    setIsShown(current => !current);
  };
 
  return (
    <div>
      <div className="editor-head">
        <p className="editorName">
          {data.answer}{" "}
          <img
            onClick={handleClick}
            className="editorImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02dXAAvqLmHDKHP1ZqjIbEACFOXlHSlVlnw&usqp=CAU"
            alt="ClickDown"
          />{" "}
        </p>
      </div>
      
      {isShown && <AceEditor
       onLoad={editorInstance => {
        editorInstance.container.style.resize = "horizontal";
        document.addEventListener("mouseup", e => (
          editorInstance.resize()
        ));
      }}
        className="AceEditor"
        mode={data.mode}
        width="435px"
        height="290px"
        theme="twilight"
       
        onChange={data.onChange}
        fontSize={16}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        
        value={data.value}
        wrapEnabled={true}
        setOptions={{
          
          useWorker: false,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />}
    </div>
  );
};

export default Editor;
