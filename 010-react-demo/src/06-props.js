import React from 'react';
import ReactDOM from 'react-dom';

function Avatar(props) {
  return (
      <img
          src={props.user.imgUrl}
          alt={props.user.username}
      />
  )
}

function UserInfo(props) {
  return (
      <div className="userinfo">
        <Avatar user={props.autor}/>
        <div className="username">{props.username}</div>
      </div>
  )
}

function Comment(props) {
  return(
      <div className='comment'>
        <UserInfo
          autor={props.info}
          username={props.username}
        />
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{props.date}</div>
      </div>
  )
}


ReactDOM.render(
    <Comment
      text='zzzzzzzzrd'
      date='0820'
      username='zrd'
      info={{imgUrl:'https://avatars3.githubusercontent.com/u/23623015?s=400&u=347501b63afc566a9d41b00ded93d40c4d2c530a&v=4',username:'zzzrd'}}
    />,
    document.getElementById('root')
);