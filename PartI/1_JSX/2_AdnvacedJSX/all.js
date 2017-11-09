1. class vs className

  Why? HTML vs JSX and class keywords in JS

  DO:

  import React from 'react';
  import ReactDOM from 'react-dom';

  const myDiv = (
  	<div className="big">
    	I AM A BIG DIV
    </div>
  );

  ReactDOM.render(
  myDiv,
  document.getElementById('app')
  );

2. In JSX you need self-closing tag slash

   <br /> vs. <br> no

   DO:

    const profile = (
    <div>
      <h1>I AM JENKINS</h1>
      <img src="images/jenkins.png" />
      <article>
        I LIKE TO SIT
        <br />
        JENKINS IS MY NAME
        <br />
        THANKS HA LOT
      </article>
    </div>
  );

3. JS in your JSX

   use curly bracket {}

   DO:

  import React from 'react';
  import ReactDOM from 'react-dom';

  // Write code here:
  ReactDOM.render(
   <h1>{2 + 3}</h1>,
   document.getElementById('app')
  );

4.

  import React from 'react';
  import ReactDOM from 'react-dom';

  // Write code here:
  ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
  );

5.

  import React from 'react';
  import ReactDOM from 'react-dom';

  // Write code here:
  const math = (
  <h1>2 + 3 = {2 + 3}</h1>
  );

  ReactDOM.render(
  math,
  document.getElementById('app')
  );

6.

  import React from 'react';
  import ReactDOM from 'react-dom';

  const theBestString = 'tralalalala i am da best';

  ReactDOM.render(
  <h1>{theBestString}</h1>,
  document.getElementById('app'));

7.

  import React from 'react';
  import ReactDOM from 'react-dom';

  const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

  // Declare new variable here:
  const gooseImg = <img src={goose} />;

  ReactDOM.render(
  	gooseImg,
    document.getElementById('app')

  );


  8.

  import React from 'react';
  import ReactDOM from 'react-dom';

  function makeDoggy(e) {
    // Call this extremely useful function on an <img>.
    // The <img> will become a picture of a doggy.
    e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
  }

    const kitty = (
    	<img
    		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"
    		alt="kitty"
        onClick={makeDoggy} />
    );

    ReactDOM.render(
      kitty,
      document.getElementById('app'));


9. NEXT

10.

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() == 'heads') {
  img = <img src={pics.kitty} />;
} else {
  img = <img src={pics.doggy} />;
}

ReactDOM.render(
	img,
  document.getElementById('app')
);

11.

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img,
	document.getElementById('app')
);

12.

import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li> }
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods,
	document.getElementById('app')
);

13.

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
	<li key={'person_'+ i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{peopleLis}</ul>,
  document.getElementById('app')
);


14.

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
	<li key={'person_'+ i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{peopleLis}</ul>,
  document.getElementById('app')
);

15.

const greatestDivEver = React.createElement(
"div",
null,
"i am div");

16. NEXT
