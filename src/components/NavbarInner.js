import React, { Component } from 'react';
// import './NavbarInner.css';

class NavbarInner extends Component {
  render() {
    return (
      <div className={ 'NavbarInner ' + this.props.className } id="navbarSupportedContent">
        {this.props.children}
      </div>
    );
  }
}

export default NavbarInner;
