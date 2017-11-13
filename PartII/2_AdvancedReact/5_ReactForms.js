1. Read, analyze, click Next

2.
import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput}/>
        <h1>I am an h1.</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);

3.
import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} />
        <h1>I am an h1.</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);

4.
import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: ''};
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(e) {
    this.setState({userInput: e.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} />
        <h1>I am an h1.</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);

5.
import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userInput: '' };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({userInput: e.target.value});
  }

  render() {
    return (
      <div>
        <input type="text"
          		 onChange={this.handleUserInput}
          		 value={this.state.userInput}/>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);

6. Read, understand, click Next

7. Read, and done with this unit. Click Next
