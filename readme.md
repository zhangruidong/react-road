# react-road

### 创建并运行一个react应用
1. create-react-app my-app
2. cd my-app
3. yarn start

### react是什么？
> React是一个采用声明式，高效切灵活的用来构建用户界面的框架。

#### 为什么不可变性在React中非常重要
1. 很轻松的实现 撤销/重做以及时间旅行
2. 记录变化 在我们直接修改一个对象的内容之后，是很难判断它哪里发生了变化的。我们想要判断一个对象的改变，必须拿当前的对象和之前的对象相互比较，遍历整个对象树，比较每一个值，这样操作的复杂度是非常高的。而运用不可变性原则之后则要轻松很多。因为我们每一次都是返回一个新的对象，所以只要判断这个对象被替换了，那么其中的数据肯定是被改变了的。
3. 在React当中判定何时重新渲染  这样可以很方便的判断对象数据是否发生了变化，那么也就很好的决定何时根据数据的改变重新渲染组件


### JSX
#### 命名
> 因为JSX的特性更接近JavaScript而不是HTML，所以React DOM使用camelCase小驼峰命名来定义属性的名称，而不是使用HTML的属性名称。<br>例如class变成了className，而tabindex便成了tabIndex。

### 组件
#### 警告
> 组件的名称必须以大写字母开头。
> 例如，<div/>表示一个DOM标签，但<Welcome /> 表示一个组件，并且在使用该组件时你必须定义或引入他。

### 列表 & keys
> 元素的key只有在它和它的兄弟节点对比时才有意义。<br> 比方说，如果你提取一个ListItem组件，你应该把key保存在数组中的这个`<ListItem />`元素上，而不是放在ListItem组件中的`<li>`元素上


### react 中配置 sass
1. npm install sass-loader node-sass --save-dev
2. 在node_modules/react-scripts/config下找到 webpack.config.dev.js 文件，在 exclude 中添加 /.scss$/,
3. 并在loaders中添加一项：
```js
    {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
    }
```
> 注意，我们只是修改了 webpack.config.dev.js ,如果要在生产环境中生效，需要在webpack.config.prod.js做同样的配置。




