// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Allroutes from './components/Allroutes';

function App() {
  return (
    <Router>
      <Navbar />
      <Allroutes />
    </Router>
  );
}

export default App;
