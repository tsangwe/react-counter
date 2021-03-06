import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";
import { PageHeader } from 'antd';

ReactDOM.render(
  <React.StrictMode>
    <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Intelligent Counter"
    subTitle=""
  />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
