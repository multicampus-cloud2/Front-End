import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from 'components/Home';
import Compare from 'components/Compare';
import About from 'components/About/AboutForm';
import Login from 'components/Auth0/Sign/LoginButton';
import Logout from 'components/Auth0/Sign/LogoutButton';
import UserProfile from 'components/Auth0/User/UserProfile';
import UserLikeBrand from 'components/Auth0/User/UserLikeBrand';
import 'css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from 'img/logo.png';
import styled from "styled-components";

const styledLogo = styled.div`
'margin': 'auto',
'paddingBottom': '1%'
`;

class App extends React.Component {

  render() {

    return (
      <>
        <header className="header">
          <div className="header__menu">
            <styledLogo>
              <div className="logo">
                <Link to="/"><img src={logo} alt="logo" /></Link>
              </div>
            </styledLogo>
            <div className="auth_menu">
              <ul className="auth_list">
                <li><Login /></li>
                <li><UserProfile /></li>
                <li><UserLikeBrand /></li>
                <li><Logout /></li>
              </ul>
            </div>
            <div className="menu_nav">
              <ul className="menu_list">
                <li> <Link to="/">홈</Link> </li>
                <li> <Link to="/compare">카카비교</Link> </li>
                <li> <Link to="/about">카카오바웃</Link> </li>
              </ul>
            </div>
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
