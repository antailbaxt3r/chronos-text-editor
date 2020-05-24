import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { withRouter } from "react-router-dom";

let fileReader, thisFile

const App = withRouter(({ history }) => {

  const [file, setFile] = useState({})

  const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(content);
    setFile({
      contents: content,
      name: thisFile.name
    })
    console.log(file)
    // … do something with the 'content' …
  };
  const onChangeHandler = (event) => {
    thisFile = event.target.files[0];
    console.log(thisFile)
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(thisFile);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="file" name="file" onChange={onChangeHandler} />
        <button onClick={() => history.push({
          pathname: '/ide',
          state: { file: file }
        })}>Upload</button>
      </header>
    </div>
  );
});

export default App;
