import React from 'react';
import ReactDOM from 'react-dom';


// JSX 属性
const user = {
  name: 'zrd',
  age: 18,
  address: 'shanghai'
};

const element = <div tabIndex="0" add={user.address}>JSX 属性</div>;

// JSX 嵌套
// 如果JSX是闭合的，那么你需要在结尾处用 /> ,就好像XML/HTML一样



ReactDOM.render(
    element,
    document.getElementById('root')
);
