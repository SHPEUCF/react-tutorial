1. You just learned about props
now we are moving into state:

props and state are all that you need
to set up an ecosystem of interacting
React components.

  DO: Click NEXT

2.
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
  constructor(props) {
    super(props);
    this.state = { title: 'Best App' };
  }


  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(
	<App />,
  document.getElementById('app')
);

3.
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
  constructor(props) {
    super(props);
    this.state = { title: 'Best App' };
  }


  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(
	<App />,
  document.getElementById('app')
);

4. Read, understand, click NEXT

5.
// Toggle.js
import React from 'react';
import ReactDOM from 'react-dom';


const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color ==  green ? yellow : green;
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(
	<Toggle />,
  document.getElementById('app')
);

6. Read, understand, click NEXT

7. Done. NEXT
