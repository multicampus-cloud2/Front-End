import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from 'components/Home';
import Compare from 'components/Compare';
import About from 'components/About';
import Login from 'components/LoginButton';
import Logout from 'components/LogoutButton';
import User_Profile from 'components/User_Profile';
import User_LikeBrand from 'components/User_LikeBrand';
import 'css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from 'img/logo.png';

class App extends React.Component {

  render() {
    const style = {
      // display: 'block',
      margin: 'auto',
      'padding': '15px 0px'
    };

    return (
      <>
        <div>
          <div style={{ position: "absolute",left:'10px'}}>
            <Login></Login>
            <Logout></Logout>
            <User_LikeBrand></User_LikeBrand>
            <User_Profile></User_Profile>
          </div>
          <div style={{ textAlign: "center" }}><Link to="/"><img src={logo} style={style} alt="logo" /></Link></div>

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

        <div>
          <Route path="/" component={Home} exact={true} />
          <Route path="/compare" component={Compare} />
          <Route path="/about" component={About} />
        </div>
      </>
    )
  };
};


export default App;
