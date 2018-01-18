import React from 'react';
import ReactDOM from 'react-dom';

function Item(props) {
  return <li>{props.item}</li>
}

function NumberList(props) {
  return (
      <ul>{
        props.arr.map( (item,index) =>
            <Item key={index} item={item} />
        )
      }</ul>
  )
}

const numbers = [1,2,3,4,5,6,7,9];

ReactDOM.render(
    <NumberList arr={numbers}/>,
    document.getElementById('root')
);