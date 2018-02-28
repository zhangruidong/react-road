import React from 'react';
import ReactDOM from 'react-dom';

/*
* 组合 & 继承
*
* */

function FancyBorder(props) {
  return (
      <div className={'fancy-border fancy-border-'+props.color}>
        <div className="title">{props.title}</div>
        <div className="content">{props.content}</div>
      </div>
  )
}

function WelcomeDialog() {
  return (
      <FancyBorder
          color='red'
          title= {
            <h1>
              dialogTitle
            </h1>
          }
          content= {
            <p>
              dialogContent
            </p>
          }
      />
  )
}

ReactDOM.render(
    <WelcomeDialog/>,
    document.getElementById('root')
)
