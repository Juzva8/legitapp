import React, { useState, useEffect } from 'react'
import './App.css';
import logo from './Assets/logo_transp.png';
import Post from './Components/Post/Post';
import { db } from './firebase'


function App() {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {

  db.collection('posts').onSnapshot(snapshot => {
    setPosts(snapshot.docs.map(doc => doc.data()))
  })
  }, [])

  return (
    <div className="app">
   
      <div className="app__header">
        <img src= {logo} alt="legit logo"/>
      </div>

      <h1>Hello legit app users </h1>
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
