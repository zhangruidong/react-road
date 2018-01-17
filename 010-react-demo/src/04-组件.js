import React from 'react';
import ReactDOM from 'react-dom';

/*class Welcome extends React.Component {
  render() {
    return (
        <h1>
          Hello zhangruidong! -_-
        </h1>
    )
  }
}*/

function Welcome(props) {
  return (
      <h1>
        Hello zhangruidong! -_-  {props.name}
      </h1>
  )
}

const ELEMETN = <Welcome name="zzzrd"/>

ReactDOM.render(
    ELEMETN,
    document.getElementById('root')
)
