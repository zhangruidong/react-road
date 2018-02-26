import React from 'react';
import ReactDOM from 'react-dom';


//   JSX 申明变量
// const element = <h1>hello world! ~zrd</h1>;

// JSX 表达式
// function sss() {
//   return 'aaa';
// }

function getGreeting(user) {
  if(user){
    return <h1>hello {user}!</h1>
  }else{
    return <h1>hello stranger!!!</h1>
  }
}


ReactDOM.render(
    <div>{getGreeting('zrd')}</div>,
    document.getElementById('root')
);
