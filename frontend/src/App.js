import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
const App = () => {
  return (
    <Router>
      <Route path='/' component={HomePage} exact></Route>
    </Router>
  );
};

export default App;
