1. Read, then Next

2.
import React from 'react';
import ReactDOM from 'react-dom';

const styleMe = <h1 style={{ background: 'lightblue', color: 'darkred' }}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe,
	document.getElementById('app')
);

3.
//StyleMe.js
import React from 'react';
import ReactDOM from 'react-dom';
const styles = {
  background: 'lightblue',
  color:      'darkred',
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe,
	document.getElementById('app')
);
4.
import React from 'react';
import ReactDOM from 'react-dom';
const styles = {
  background: 'lightblue',
  color:      'darkred',
  marginTop: 	'100px',
  fontSize: 	'50px'
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe,
	document.getElementById('app')
);

5.

import React from 'react';
import ReactDOM from 'react-dom';
const styles = {
  background: 'lightblue',
  color:      'darkred',
  marginTop: 	100,
  fontSize: 	50
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe,
	document.getElementById('app')
);

6.
//styles.js
const fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
const background = 'pink url("https://media.giphy.com/media/oyr89uTOBNVbG/giphy.gif") fixed';
const fontSize = '4em';
const padding = '45px 0';
const color = 'green';

export const styles = {
  fontFamily: fontFamily,
  background: background,
  fontSize: 	fontSize,
  padding:		padding,
  color:			color
};

// AttentionGrabber.js
import React from 'react';
import { styles } from './styles';

const h1Style = {
  color:			styles.color,
  fontSize:		styles.fontSize,
  fontFamily:	styles.fontFamily,
  padding:		styles.padding,
  margin:			0
};

export class AttentionGrabber extends React.Component {
	render() {
		return <h1 style={h1Style}>WELCOME TO MY HOMEPAGE!</h1>;
	}
}

// Home.js
import React from 'react';
import ReactDOM from 'react-dom';
import { AttentionGrabber } from './AttentionGrabber';
import { styles } from './styles';

const divStyle = {
  background: styles.background,
  height:			'100%'
};

export class Home extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <AttentionGrabber />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}

ReactDOM.render(
	<Home />,
	document.getElementById('app')
);
