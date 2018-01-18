import React from 'react';
import ReactDOM from 'react-dom';

const numbers=[1,2,3,4,5,6];
const lists = numbers.map( (item,index) =>
    <li key={index}>{item*4}</li>
);



ReactDOM.render(
    <ul>{lists}</ul>,
    document.getElementById('root')
)