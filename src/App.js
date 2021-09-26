/*eslint-disable*/

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'

function App() {

  let [영화, 리스트] = useState(['뭔가', '없다']);
  let [a,b] = usestate(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>Moviebox</div>
      </div>
      <div className = "list">
        <h3> { 영화[0] } <span onclick={()=>{ b(a+1) } }> 좋아요 </span> 0 </h3>
        <hr/>
      </div>
    </div>
  );
}

export default App;
