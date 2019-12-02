import React from 'react';
import './App.css';
import UserCardList from "./UserCardList";


function App() {
  return (
    <div className="App">
      <UserCardList qty={3}/>
    </div>
  );
}

export default App;
