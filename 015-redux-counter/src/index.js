import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

import './common/style/main.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
