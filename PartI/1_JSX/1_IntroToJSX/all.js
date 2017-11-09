1. Why React?

  - Fast: handles complex updates well
  - Modular: reusable files
  - Scalable: performs best
  - Popular now: more jobs

2. JSX

  DO: copy/paste the following:

  const h1 = <h1>Hello world!</h1>;

3. JSX:

   looks like HTML, generates HTML from JS, basically

   DO: lick NEXT

4. What is JSX?

  JSX is a syntax extension for JavaScript.
  It was written to be used with React.
  JSX code looks a lot like HTML.

  DO: click NEXT

5. JSX element

  an element is the basic building block of
  JSX, just like HTML

  DO: copy/paste the following

  <p>Hello world</p>

6. JSX element are treated as JavaScript

  Elements can go anywhere where JavaScript
  can go

  DO: copy/paste

  const myArticle = <article></article>;

7. Attributes in JSX

  just like HTML with some diffences to see later

  DO: copy/paste
  const p1 = <p id="large">foo</p>;
  const p2 = <p id="small">bar</p>;

8. Nested JSX

  can only have one outer element to be valid

  DO: copy/paste

  const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>);

9. JSX Outer element

  again, just one outer element, enclose other
  in the outer one

  DO:

  const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Dans Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
    </article>
  </div>
);

10. Rendering JSX

  to make elements/components appear on the screen
  use:

  ReactDOM.render(); from ReactDOM

  DO:

  import React from 'react';
  import ReactDOM from 'react-dom';

  // Copy code here:
  ReactDOM.render(
    <h1>Hello world</h1>,
    document.getElementById('app')
  );


11. Rendering a headline

  DO:

  import React from 'react';
  import ReactDOM from 'react-dom';

  // This is just an example, switch to app.js for the exercise.
  ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));

12. More rendering with ReactDOM

    where is it render? Look into the HTML files
  The HTML:

  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="utf-8">
  	<link rel="stylesheet" href="/styles.css">
  	<title>Learn ReactJS</title>
  </head>

  <body>
    <span id="container"></span>
  	<script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
    <script src="/app.compiled.js"></script>
  </body>

  </html>

  the JS:

  import React from 'react';
  import ReactDOM from 'react-dom';

  // Write code here:
  ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

13. Pass variable to ReactDOM

    import React from 'react';
    import ReactDOM from 'react-dom';

    // Write code here:
    const myList = (
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    );

    ReactDOM.render(
    myList,
    document.getElementById('app')
    );
14. The Virtual DOM

    React only updates what has changed
    DO: NEXT

15. DO: NEXT
    DONE
