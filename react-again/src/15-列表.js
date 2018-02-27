import React from 'react';
import ReactDOM from 'react-dom';

/*
* 表单  -- 受控组件
* */
const arr = [1,2,3,4,5];
const listItems = arr.map( (item,index)=>(<li key={index}>{item*2}</li>) );
ReactDOM.render(
    <ul>
      {listItems}
    </ul>,
    document.getElementById('root')
);