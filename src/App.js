/*eslint-disable*/

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'

function App() {

  let [영화, 리스트] = useState(['뭔가', '없다']);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기(){
    var newArray = [...영화];
    newArray[0] = '아니';
    리스트( newArray );
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>Moviebox</div>
      </div>
      <button onClick={ ()=> {따봉변경(따봉+1)}}>좋아요</button>
        <h2>{따봉}</h2>
      <div className = "list">
        <h3> { 영화[0] } </h3>
        <p>뭔데</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
