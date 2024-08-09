import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import About from './Components/About';
import Footer from './Components/Footer';

import {
  // BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { HashRouter } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      showalert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showalert("Light mode has been enabled", "success");
    }
  };

  return (
    <HashRouter>
      <Navbar title="Text Utils" about="About" mode={mode} toggleMode={toggleMode} />

      <Alert message={alert} />

      <div className={`container my-3 text-${mode === 'light' ? 'dark' : 'light'}`}>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter your text here" mode={mode} />} />
        </Routes>
      </div>
      <Footer mode={mode}/> 
    </HashRouter>
  );
}

export default App;
