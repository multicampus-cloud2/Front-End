import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from 'Home';
import Compare from 'compare';
import About from 'About';
import 'App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from 'img/logo.png';
//import { faCentercode } from '@fortawesome/free-brands-svg-icons';


class App extends React.Component {
  render() {
    const style = {
      display: 'block',
      margin: 'auto',
      'padding': '5px 0px'
    };
    
    return (
      <>
        <div>
          <Link to="/"><img src={logo} style={style} alt="logo"/></Link>
        </div>

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
        
        <div className="team">
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
            <Route path="/compare" component={Compare}/>
        </div>
      </>
  )};
};


export default App;
