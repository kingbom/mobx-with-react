import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'mobx-react';
import stores from './stores';

ReactDOM.render(
    <Provider {...stores} >
        <App />
    </Provider>,
    document.getElementById('root'));
    
serviceWorker.unregister();
