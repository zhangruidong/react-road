import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
/*
* 使用 PropTypes 检查类型
*
* */
class MyComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return (
        <div>
          {children}
          {this.props.name}
        </div>
    );
  }
}

MyComponent.defaultProps= {
  name:'back'
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string
};



ReactDOM.render(
    <MyComponent name={'zrd'}><h2>zzzzzz</h2></MyComponent>,
    document.getElementById('root')
);
