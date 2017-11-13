1. Read, understand, click Next

2.
// BestSeller.js
import React from 'react';

export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>
          {this.props.title}
        </span><br />

        Author: <span>
          {this.props.author}
        </span><br />

        Weeks: <span>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
}

BestSeller.propTypes = {}

3.
import React from 'react';

export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>
          {this.props.title}
        </span><br />

        Author: <span>
          {this.props.author}
        </span><br />

        Weeks: <span>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
}

BestSeller.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  weeksOnList: React.PropTypes.number.isRequired,
};

4.
import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

GuineaPigs.propTypes = {
  src: React.PropTypes.string.isRequired,
};

DONE -> NEXT
