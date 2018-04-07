import React, { Component } from 'react';
import './Example.css';

class Example extends Component {
  render() {
    return (
      <div className="container">
        <p>{this.props.title}</p>
        <div class="Example-display">
          {this.props.children}
        </div>
        <pre class="Example-code">
          &lt;element /&gt;
        </pre>
      </div>
    );
  }
}

export default Example;
