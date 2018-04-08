import React, { Component } from 'react';
import NavbarSecondary from './NavbarSecondary'
import NavbarMain from './NavbarMain'

class Navbar extends Component {
  render() {
    return (
      <div className={ 'Navbar ' + this.props.className }>
        <NavbarSecondary />
        <NavbarMain />
      </div>
    );
  }
}

export default Navbar;
