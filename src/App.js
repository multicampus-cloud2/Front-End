import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from 'components/Home';
import Compare from 'components/Compare';
import About from 'components/About';
import Login from 'components/Auth0/Sign/LoginButton';
import Logout from 'components/Auth0/Sign/LogoutButton';
import UserProfile from 'components/Auth0/User/UserProfile';
import UserLikeBrand from 'components/Auth0/User/UserLikeBrand';
import 'css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from 'img/logo.png';

class App extends React.Component {

  render() {
    const style = {
      'margin': 'auto',
      'paddingBottom': '1%'
    };

    return (
      <>
        <div>
          <div>
            <Login></Login>
            <Logout></Logout>
            <UserLikeBrand></UserLikeBrand>
            <UserProfile></UserProfile>
          </div>
          {/* <div className="App-logo"><Link to="/"><img src={logo} style={style} alt="logo" /></Link></div> */}

        </div>

        <header className="header">
          <div className="header__menu">
            <div className="logo">
          <Link to="/"><img src={logo} style={style} alt="logo" /></Link>
          </div>
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
