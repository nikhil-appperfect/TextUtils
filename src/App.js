import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const triggerAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      triggerAlert("Light mode has been enabled!", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      triggerAlert("Dark mode has been enabled!", "success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About /> */}
        <TextForm triggerAlert={triggerAlert} heading="Enter text here to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
