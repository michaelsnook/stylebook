import React, { Component } from 'react';
import NavbarInner from './NavbarInner'
import SearchInline from './SearchInline'
import NavSimple from './NavSimple'
import logo from '../logo.svg';

class NavbarMain extends Component {

  render() {
    return (
      <nav className={ 'NavbarMain ' + this.props.className }>

        <a className="navbar-brand" href="/">
          <img src={logo} className="App-logo" alt="logo" /> The Space Party
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <NavbarInner>
          <NavSimple />
          <SearchInline />
        </NavbarInner>

      </nav>
    );
  }
}

export default NavbarMain;
