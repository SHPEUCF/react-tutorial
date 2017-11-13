1. Read, understand, click Next

2. Read the code on each component
try to understand what it is doing

  Then click Next

3.

// Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);

4.
// Siblings.js
import React from 'react';

export class Sibling extends React.Component {
  render() {
		const name = this.props.name;
    return (
      <div>
        <h1>`Hey, my name is {name}!`</h1>
        <h2>`Don't you think {name} is the prettiest name ever?`</h2>
        <h2>`Sure am glad that my parents picked {name}!`</h2>
      </div>
    );
  }
}

5. React, understand, click Next

DONE
