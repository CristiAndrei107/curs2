import React from 'react';
import './App.css';
import Navbar from './Components/Header/navbar.component';
import Post from './Components/Post/post.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="posts">
      <Post title="Postare1" description="Continut"></Post>
      <Post title="Ceva" description="Altceva"></Post>
      </div>
    </div>
  );
}

export default App;
