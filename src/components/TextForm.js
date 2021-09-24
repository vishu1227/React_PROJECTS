import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("handel Up click function fired!");

    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("Uper Case Done!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const cleartext = () => {
    setText("");
  };

  // default value of text "Enter text here!"
  const [text, setText] = useState("Enter text here");
  //   to change the text
  //   setText("Text changed!");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary" onClick={cleartext}>
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
