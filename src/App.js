import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
