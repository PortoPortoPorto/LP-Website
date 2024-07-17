import react from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { RefsProvider } from './context/RefsContext.jsx';
import Home from './components/Home.jsx';
import Store from './components/Store.jsx';


library.add(fas, fab);

function App() {
  
  return (
    <>
      <RefsProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/store" element={<Store/>}/>
          </Routes>
        </Router>
      </RefsProvider>
    </>
  );
};

export default App;
