1. Read, then click Next

2.
// Parent.js
import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: 'Frarthur'}
  }
  render() {
    return <div></div>;
  }
}

3.
// Child.js
import React from 'react';

export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}

4.
// Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }

  render() {
    return <Child name={this.state.name} />;
  }
}

ReactDOM.render(
<Parent />,
document.getElementById('app'));

5.
 VERY IMPORTANT

 A React component should use props to store
 information that can be changed, but can
 only be changed by a different component.

 A React component should use state to store
 information that the component itself can
 change.
