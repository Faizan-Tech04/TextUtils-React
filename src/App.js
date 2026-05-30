import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import React, { useState } from "react";
import Alert from "./components/Alert";


  import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // State to track dark mode
  const [alert, setAlert] = useState(null); // State to track alert message



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (color) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "Grey";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else if (color === "blue") {
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Blue mode has been enabled", "success");
      // document.title = "TextUtils - Blue Mode";
    } else if (color === "red") {
      document.body.style.backgroundColor = "#5c0000";
      document.body.style.color = "white";
      showAlert("Red mode has been enabled", "success");
      // document.title = "TextUtils - Red Mode";
    } else if (color === "green") {
      document.body.style.backgroundColor = "#014d4e";
      document.body.style.color = "white";
      showAlert("Green mode has been enabled", "success");
      // document.title = "TextUtils - Green Mode";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router> 
        <Navbar title="TextUtils" 
       
        mode= {mode}
        toggleMode={toggleMode}
          />
        <Alert alert={alert} />
       

        <div className="container my-3">
           <Switch> 
            <Route exact path="/">
            <TextForm
              showAlert={showAlert}
              heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
              mode={mode}
            />
            </Route> 
            <Route exact path="/about" mode={mode}>
              <About />
            </Route>
        </Switch>
        </div>
      </Router> 
    </>
  );
}

export default App;
