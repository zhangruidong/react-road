import React from 'react';
import ReactDOM from 'react-dom';

/*
* 状态提升
* */

const scaleNames = {
  c: 'Celsius',  // 摄氏度
  f: 'Fahrenheit' // 华氏度
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

class InputBox extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
        <div>
          <fieldset>
            <legend>Enter temperature in {scaleNames[this.props.scale]}</legend>
            <input type="text" value={this.props.temperature}/>
          </fieldset>
        </div>
    )
  }
}

class Verdict extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <h2>The water would {Number(this.props.temperature)<100 && 'not'} boil!</h2>
    )
  }
}

class BoilingVerdict extends React.Component {
  constructor() {
    super();
    this.state= {temperature:'1',scale:'c'}
  }
  render() {
    return (
        <div>
          <InputBox scale='c' temperature='0'/>
          <InputBox scale='f' temperature='0'/>
          <Verdict temperature={this.state.temperature}/>
        </div>
    )
  }
}

ReactDOM.render(
    <BoilingVerdict/>,
    document.getElementById('root')
)