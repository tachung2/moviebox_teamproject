import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const formatName = function(name) {
    return name.firstName + " " + name.lastName;
}

const name = {
    firstName: "jemin",
    lastName: "Sung",
};
const element = <h1> Hello,{ formatName(name) }! </h1>

ReactDOM.render( <React.StrictMode>
    <App/>
    </React.StrictMode>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();