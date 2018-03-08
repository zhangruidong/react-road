import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <React.Fragment>
          <td>
            <input type="checkbox"/>选中
          </td>
          <td>{this.props.data.title}</td>
          <td>{this.props.data.singer}</td>
          <td>
            <input type="checkbox"/>
          </td>
          <td style={ {cursor:'pointer'} }>✖</td>
        </React.Fragment>
    )
  }
}