import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Compare from './compare';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <header className="header">
        <div className="header__menu">
          <nav>
            <ul>
              <li>
                  <Link to="/">홈</Link>
                </li>
                <li>
                  <Link to="/compare">카카비교</Link>
                </li>
                <li>
                  <Link to="/about">카카오바웃</Link>
                </li>
            </ul>
          </nav>

        </div>
      </header>
      <div>
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/compare" component={Compare}/>
      </div>
    </>

  );
};


export default App;