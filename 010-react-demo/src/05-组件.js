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
function App() {
  return(
      <div>
        <Welcome name='Sara'/>
        <Welcome name='Tom'/>
        <Welcome name='Jack'/>
        <Welcome name='Tina'/>
      </div>
  )
}

const element = <App/>;

ReactDOM.render(
    element,
    document.getElementById('root')
)
