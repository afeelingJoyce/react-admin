// import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import 'antd/dist/antd.css';


ReactDOM.render(

    <BrowserRouter>
        <ConfigProvider locale={zh_CN}>
            <App />
        </ConfigProvider>
    </BrowserRouter>,
    document.getElementById('root'));


registerServiceWorker();
