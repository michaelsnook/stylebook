import React, { Component } from 'react';

class NavSimple extends Component {
  render() {
    return (
      <ul className={ 'NavSimple ' + this.props.className }>
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    );
  }
}

NavSimple.defaultProps = {
  className: 'mr-auto'
};

export default NavSimple;
