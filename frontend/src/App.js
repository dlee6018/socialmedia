import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import Header from './components/Header';
const App = () => {
  return (
    <Router>
      <Header/>
      <Route path='/' component={HomePage} exact></Route>
      <Route path='/search' component={SearchPage} exact></Route>
    </Router>
  );
};

export default App;
