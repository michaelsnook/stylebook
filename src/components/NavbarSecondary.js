import React, { Component } from 'react';

class NavbarSecondary extends Component {
  render() {
    return (
      <div className={ 'NavbarSecondary ' + this.props.className }>
        <div className="container">
          <a className="NavbarSeconary-link" href="#">Sign up</a>&nbsp;
          or give a missed call to&nbsp;
          <a className="NavbarSecondary-link" href="#">add us to your WhatsApp</a>
        </div>
      </div>
    );
  }
}

export default NavbarSecondary;
