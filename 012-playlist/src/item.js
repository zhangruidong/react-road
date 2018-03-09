import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  handleCheck = (e) => {
    this.props.handleCheck(this.props.data.id,e);
  };
  handleLike = (e) => {
    this.props.handleLike(this.props.data.id,e);
  };
  handleDelete = () => {
    this.props.handleDelete(this.props.data.id);
  }
  render() {
    return (
        <React.Fragment>
          <td>
            <input type="checkbox" checked={this.props.data.selected} onChange={this.handleCheck}/>选中
          </td>
          <td>{this.props.data.title}</td>
          <td>{this.props.data.singer}</td>
          <td>
            <input type="checkbox" checked={this.props.data.like} onChange={this.handleLike}/>
          </td>
          <td style={ {cursor:'pointer'} } onClick={this.handleDelete}>✖</td>
        </React.Fragment>
    )
  }
}