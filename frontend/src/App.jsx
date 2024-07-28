import react from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { RefsProvider } from './context/RefsContext.jsx';
import Home from './components/Home.jsx';
import Store from './components/Store.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Martians from './components/Martians.jsx';
import Journey from './components/Journey.jsx';
import Tarot from './components/Tarot.jsx';


library.add(fas, fab);

function App() {
  
  return (
    <>
      <RefsProvider>
        <Router>
          <ScrollToTop/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/tarot" element={<Tarot/>} />
            <Route exact path="/journey" element={<Journey/>} />
            <Route exact path="/martians" element={<Martians/>} />
            <Route path="/store" element={<Store/>}/>
          </Routes>
        </Router>
      </RefsProvider>
    </>
  );
};

export default App;
