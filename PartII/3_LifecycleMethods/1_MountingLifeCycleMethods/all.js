1. Read, understand waht Lifecycle
of components is.

  click Next

2.
There are three categories of
lifecycle methods:
 mounting, updating, and unmounting.

 There are three mounting
 lifecycle methods:

    componentWillMount
    render
    componentDidMount

    click Next

3.
import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
  componentWillMount() {
    render() {
      alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
    }
  }
  render() {
    alert('Flashy is rendering!');

    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);


setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);


4. Read, understand, click Next\


5.
import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
  componentWillMount() {
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }

  componentDidMount() {
    alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
  }

  render() {

    alert('Flashy is rendering!');

    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);
