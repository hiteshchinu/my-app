import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to upper case","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lower case","success");
  };

  const handleClearClick = () => {
    setText('');
    props.showalert("Text is cleared","success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => alert("Copied to Clipboard!"))
      .catch(() => alert("Failed to copy text."));
  };

  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, ' '));
    props.showalert("Extra spaces removed", "success");
  };

  const handleCapitalizeClick = () => {
    setText(text.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' '));
    props.showalert("Capitalized each word", "success");
  };

  const handleReverseText = () => {
    setText(text.split('').reverse().join(''));
    props.showalert("Text reversed", "success");
  };

  const handlePasteClick = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
      props.showalert("Pasted from Clipboard!", "success");
    } catch (err) {
      props.showalert("Failed to paste text.", "danger");
    }
  };

  const speak = () => {
    if (text.trim() === '') {
      return;
    }
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const wordCount = text.trim().split(/\s+/).filter((word) => word !== '').length;

  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="TextBox"
            rows="8"
            style={{
              backgroundColor: props.mode === 'dark' ? '#333' : '#fff',
              color: props.mode === 'dark' ? '#fff' : '#000'
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handlePasteClick}>Paste Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeClick}>Capitalize Each Word</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleReverseText}>Reverse Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button type="submit" onClick={speak} className="btn btn-primary mx-1 my-1">Convert to Speech</button>
      </div>
      <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h1>Your text summary</h1>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.008 * wordCount} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  )
}
