import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlertMessage = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#08334a";
      showAlertMessage("Dark mode has been enabled!", "success");
      document.title = "Text Utils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlertMessage("Light mode has been enabled!", "success");
      document.title = "Text Utils - Light Mode";
    }
  };

  return (
    <>
    <Router>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div
        className={`container my-5 text-${mode === "light" ? "dark" : "light"}`}
      >
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm
              mode={mode}
              showAlert={showAlertMessage}
              heading="Enter the text to analysis below"
            />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
