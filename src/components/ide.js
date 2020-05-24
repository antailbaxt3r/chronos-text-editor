import React from "react";
import AceEditor from "react-ace";
import "../App.css";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import { withRouter } from "react-router-dom";

const IDE = withRouter((props) => {
  const file = props.location.state.file;
  console.log(file);
  function onChange(newValue) {
    console.log("change", newValue);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{file.name}</p>
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
  );
});
export default IDE;
