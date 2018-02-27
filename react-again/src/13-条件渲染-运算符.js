import React from 'react';
import ReactDOM from 'react-dom';

/*
* 条件渲染
*   && 运算符
*   之所以能这样做，是因为在JavaScript中，true && expression 总是返回 expression，而 false && expression 总是返回false
*   因此，如果条件是true，&&右侧的元素会被渲染，如果是false，React会忽略并跳过他
* */

function MailBox(props) {
  return props.unreadMsg>0 && <h2>you have {props.unreadMsg} new messages!!</h2>
}

ReactDOM.render(
    <MailBox unreadMsg={88}/>,
    document.getElementById('root')
);