import React, { Component } from 'react';
import Navbar from '../components/Navbar.js'
import NavbarMain from '../components/NavbarMain.js'
import NavSimple from '../components/NavSimple.js'
import ModalInner from '../components/ModalInner.js'
import Modal from '../components/Modal.js'
import Card from '../components/Card.js'

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

          <h2>Modals</h2>
          <Example title="The display part of a Modal">
            <ModalInner className="d-block position-static" />
          </Example>

          <Example title="An interactive Modal example">
            <Modal />
          </Example>

          <h2>Cards</h2>
          <Example title="A card">
            <Card customStyles={{ width: '18rem' }} title="Card title">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </Card>
          </Example>

          <h2>Buttons</h2>
          <Example title="Standard buttons apply">
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-secondary">Secondary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-light">Light</button>
            <button type="button" className="btn btn-dark">Dark</button>
            <button type="button" className="btn btn-link">Link</button>
          </Example>
          <Example title="And outline buttons">
            <button type="button" class="btn btn-outline-primary">Primary</button>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
            <button type="button" class="btn btn-outline-success">Success</button>
            <button type="button" class="btn btn-outline-danger">Danger</button>
            <button type="button" class="btn btn-outline-warning">Warning</button>
            <button type="button" class="btn btn-outline-info">Info</button>
            <button type="button" class="btn btn-outline-light">Light</button>
            <button type="button" class="btn btn-outline-dark">Dark</button>
          </Example>
          <Example title="Large">
            <button type="button" class="btn btn-primary btn-lg">Large button</button>
            <button type="button" class="btn btn-secondary btn-lg">Large button</button>
          </Example>
          <Example title="Small">
            <button type="button" class="btn btn-primary btn-sm">Small button</button>
            <button type="button" class="btn btn-secondary btn-sm">Small button</button>
          </Example>
          <Example title="And block">
            <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
            <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
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
