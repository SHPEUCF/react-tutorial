1. Read, understand Statelss Functional
Compenents then:

// Friend.js
import React from 'react';
import ReactDOM from 'react-dom';

export class Friend extends React.Component {
	render() {
		return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
	}
}

export const Friend = () => {
  return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
};

ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);

2.

import React from 'react';

export const GuineaPigs = (props) => {
  let src = props.src;
  return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
}

3. NONE - click NEXT
