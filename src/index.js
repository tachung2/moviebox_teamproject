import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Wpp() {
  return (
    <div>
      <Welcome name="tachung" />
      <Welcome name="onder" />
      <Welcome name="maki" />
    </div>
  );
}

ReactDOM.render(
  <Wpp />,
  document.getElementById('root'));