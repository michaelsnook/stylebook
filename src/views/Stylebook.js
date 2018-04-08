import React, { Component } from 'react';
import Navbar from '../components/Navbar.js'
import NavbarMain from '../components/NavbarMain.js'
import NavSimple from '../components/NavSimple.js'
import Example from './Example.js'


class Stylebook extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">

          <div className="jumbotron rounded-0">
            <h1>Generic Stylebook Maker in React</h1>
            <p>This is a generic stylebook maker. Right now it has been deployed for
              The Space Party, so you see their styles. (But right now all of this is stock Bootstrap.)</p>
            <p>Soon you will also be able to preview these important stock pages:</p>
            <ul>
              <li><a href="#"> List of low-level components </a></li>
              <li><a href="#"> Sample home page </a></li>
              <li><a href="#"> Campaigns page </a></li>
              <li><a href="#"> Generic action page </a></li>
            </ul>
          </div>

          <h2>Navbars</h2>
          <Example title="The full Navbar for the website">
            <Navbar />
          </Example>
          <Example title="The main section of the Navbar">
            <NavbarMain />
          </Example>
          <Example title="A simple nav with a few links">
            <NavSimple />
          </Example>

        </div>

        <footer className="text-center border-top py-5 bg-light">
          <p><a href="https://github.com/michaelsnook/stylebook">Fork on GitHub</a></p>
        </footer>

      </React.Fragment>
    );
  }
}

export default Stylebook;
