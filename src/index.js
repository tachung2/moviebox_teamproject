import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function sum(a, b) {
  return a + b;
}
function withdraw(account, amount) {
  account.total -= amount;
}

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

ReactDOM.render(
  element,
  document.getElementById('root'));
}