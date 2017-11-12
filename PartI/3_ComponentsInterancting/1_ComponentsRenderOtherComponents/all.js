1. Read and click NEXT

2. Read, understand, click NEXT

3. Below you will find how the two files will look like at the end,
each step is building up these files so take your answers from here,
It will force you to take a look at the logic.


// ProfilePage.js

import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(
	<ProfilePage />,
  document.getElementById('app')
);




// NavBar.js
import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

// NOW MOVE ONE TO this.props
