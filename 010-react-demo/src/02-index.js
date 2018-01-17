import React from 'react';
import ReactDOM from 'react-dom';

const user = null;



ReactDOM.render(
    getGreeting(user),
    document.getElementById('root')
);

function formatName(user){
  return user.firstname+' '+user.lastname;
}

function getGreeting(user) {
  if(user){
    return (
        <h1>
          Hello {user.firstname+' '+user.lastname} !
        </h1>
    )
  }else {
    return(
        <h1>
          Hello stranger!
        </h1>
    )
  }
}