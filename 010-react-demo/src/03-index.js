import React from 'react';
import ReactDOM from 'react-dom';

function trik() {
  const ELEMENT = (
      <div>
        <h1>Hello world!</h1>
        <p>It is {new Date().toLocaleTimeString()}.</p>
      </div>
  )
  ReactDOM.render(
      ELEMENT,
      document.getElementById('root')
  )
}
setInterval(trik,1000)
