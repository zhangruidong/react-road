import React from 'react';
import ReactDOM from 'react-dom';

/*
* 状态提升
*
* 在React应用中，对应任何可变数据理应只有一个单一“数据源”。通常，状态都是首先添加在需要渲染数据的组件中。此时，如果另一个组件也需要这些数据，你可以将数据提升至离它们最近的父组件中。你应该在应用中保持 自上而下的数据流，而不是尝试在不同组件中同步状态。
状态提升比双向绑定方式要写更多的“模版代码”，但带来的好处是，你也可以更快地寻找和定位bug的工作。因为哪个组件保有状态数据，也只有它自己能够操作这些数据，发生bug的范围就被大大地减小了。此外，你也可以使用自定义逻辑来拒绝或者更改用户的输入。
如果某些数据可以由props或者state提供，那么它很有可能不应该在state中出现。举个例子，我们仅仅保存最新的编辑过的temperature和scale值，而不是同时保存 celsiusValue 和 fahrenheitValue 。另一个输入框中的值总是可以在 render() 函数中由这些保存的数据计算出来。这样我们可以根据同一个用户输入精准计算出两个需要使用的数据。
当你在开发UI界面遇到问题时，你可以使用 React 开发者工具来检查props属性，并且可以点击查看组件树，直到你找到负责目前状态更新的组件。这能让你到追踪到产生 bug 的源头。
* */

const scaleNames = {
  c: 'Celsius',  // 摄氏度
  f: 'Fahrenheit' // 华氏度
};

function toCelsius(fahrenheit) {
  if(Number.isNaN(parseFloat(fahrenheit)))return '';
  return ((fahrenheit - 32) * 5 / 9).toFixed(2);
}

function toFahrenheit(celsius) {
  console.log(celsius);
  if(Number.isNaN(parseFloat(celsius)))return '';
  return ((celsius * 9 / 5) + 32).toFixed(2);
}


function InputBox(props) {
  return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scaleNames[props.scale]}</legend>
          <input type="text" value={props.temperature} onChange={props.onTemperatureChange}/>
        </fieldset>
      </div>
  )
}

function Verdict(props) {
  return (
      <h2>The water would {Number(props.temperature)<100 && 'not'} boil!</h2>
  )
}


class BoilingVerdict extends React.Component {
  constructor() {
    super();
    this.state= {temperature:'0',scale:'c'}
  }
  
  handleCelsiusChange = (e) => {
    this.setState( {temperature: e.target.value,scale:'c'} )
  };
  handleFahrenheitChange = (e) => {
    this.setState( {temperature: e.target.value,scale:'f'} )
  };
  render() {
    const T = this.state.temperature;
    const CT=this.state.scale==='c'? T:toCelsius(T);
    const FT= this.state.scale==='f'? T:toFahrenheit(T);
    return (
        <div>
          <InputBox scale='c' temperature={CT} onTemperatureChange={this.handleCelsiusChange}/>
          <InputBox scale='f' temperature={FT} onTemperatureChange={this.handleFahrenheitChange}/>
          <Verdict temperature={CT}/>
        </div>
    )
  }
}

ReactDOM.render(
    <BoilingVerdict/>,
    document.getElementById('root')
)