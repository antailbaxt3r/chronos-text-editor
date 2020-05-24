import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { withRouter } from "react-router-dom";

let fileReader

const App = withRouter(({ history }) => {

  const [file, setFile] = useState('')

  const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(content);
    setFile(content)
    // … do something with the 'content' …
  };
  const onChangeHandler = (event) => {
    const file = event.target.files[0];

    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
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
