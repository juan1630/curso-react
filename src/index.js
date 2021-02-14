import React from 'react';
import ReactDOM from 'react-dom';
// import { HookApp } from './hooksApp';
// import { CounterApp } from './components/01-useState/counterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';


ReactDOM.render( < CounterWithCustomHook /> ,
    document.getElementById('root')
);