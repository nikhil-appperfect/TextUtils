import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    function handleUpperCaseClick(){

        let newText = text.toUpperCase()
        setText(newText);
        props.triggerAlert('Converted to Uppercase!', 'success')
      }
      function handleLowerCaseClick(){
        
        let newText = text.toLowerCase()
        setText(newText);
        props.triggerAlert('Converted to Lowercase!', 'success')
      }
      function handleClearClick(){
        setText('');
        props.triggerAlert('Successfully cleared the text!', 'success')
    }
    function handleCopyClick(){
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.triggerAlert('Text copied to the clipboard!', 'success')
    }
    function handleChange(event){
        setText(event.target.value);
    }
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white': 'black'}}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" placeholder={"Enter text here..."} value={text} onChange={handleChange} style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode ==='dark'?'white': 'black'}} id="myBox" rows="8" ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick} >Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick} >Copy Text</button>
    </div>

    <div className="container my-3" style={{color: props.mode ==='dark'?'white': 'black'}}>
        <h2>Your text summary-</h2>
        <p>Written content contains {text.split(/\b\w+\b/).length -1} words and {text.trim().length} characters.</p>
        <p>{0.08 * text.split(/\b\w+\b/).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text: 'Enter something above to see text preview text here...'}</p>
    </div>
     </>
  );
}
