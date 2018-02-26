import React from 'react';
import ReactDOM from 'react-dom';


// 元素渲染

// 元素是构成React应用的最小单位。
// const element = <h1>hello world!</h1>;

// 与浏览器的DOM元素不同，React中的元素事实上是普通的对象，React DOM可以保留浏览器DOM的数据内容与React元素保持一致。

/*
* 更新元素渲染
*
*   React 元素都是immutable 不可变的。当元素被创建之后，你是无法改变其内容或属性的。一个元素就好像是动画里的一帧，它代表应用界面在某一时间点的样子。
根据我们现阶段了解的有关 React 知识，更新界面的唯一办法是创建一个新的元素，然后将它传入 ReactDOM.render() 方法

*React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分。
* 即便我们每秒都创建了一个描述整个UI树的新元素，React DOM 也只会更新渲染文本节点中发生变化的内容。
* */


function tick() {
  const element =(
      <div>
        <h1>Hello world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
  );
  ReactDOM.render(
      element,
      document.getElementById('root')
  );
}

setInterval(tick,1000);