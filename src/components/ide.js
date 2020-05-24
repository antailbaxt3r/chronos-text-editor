import React, { useState } from "react";
import AceEditor from "react-ace";
import "../App.css";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import { withRouter } from "react-router-dom";
import { GlobalHotKeys } from "react-hotkeys";

const keyMap = {
  SAVE: "ctrl+shift+s",
};

const IDE = withRouter((props) => {
  var [file, setFile] = useState(props.location.state.file);
  
  const saveFile = () => {
    const element = document.createElement("a");
    const newFile = new Blob([file.contents], {type: 'text/plain'});
    element.href = URL.createObjectURL(newFile);
    element.download = file.name;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const handlers = {
    SAVE: saveFile,
  };

  console.log(file);
  function onChange(newValue) {
    var temp = file;
    temp.contents = newValue;
    setFile(temp);
  }

  return (
    <GlobalHotKeys keyMap={keyMap} handlers={handlers}>
      <div className="App">
        <header className="App-header">
          <p>{file.name}</p>
          <p>Ctrl + Shift + S to save</p>
          <AceEditor
            mode="java"
            theme="github"
            value={file.contents}
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
        </header>
      </div>
    </GlobalHotKeys>
  );
});
export default IDE;
