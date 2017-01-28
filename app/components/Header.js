import React, {Component} from 'react';
require('../styles/nav.css');

var Header = React.createClass({
  render(){
    return (
      <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand text-center" href="/">React Tic Tac Toe</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="/games">Games</a></li>
                <li><a href="/services">Services</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="/account">Account</a></li>
              </ul>
            </li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      </nav>
    )
  }
});

export default Header;
