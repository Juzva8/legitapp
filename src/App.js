import React, { useState, useEffect } from 'react'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import logo from './Assets/logo_transp.png';
import Post from './Components/Post/Post';
import { db } from './firebase'
import { Button } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: ` translate(-${top}%, -${left}%)`,
  }
}
const useStyles = makeStyles((theme) =>({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle)

  const [posts, setPosts] = useState([]); 
  const [open, setOpen] = useState(false);


  useEffect(() => {

  db.collection('posts').onSnapshot(snapshot => {
    setPosts(snapshot.docs.map(doc => ({
      id: doc.id,
      post: doc.data()
      })));
      })
      }, [])


  return (
       <div className="app">
           <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>Modal </h2>
    </div>
      </Modal>
   
      <div className="app__header">
        <img src= {logo} alt="legit logo"/>
      </div>
    <Button onClick={() => setOpen(true)}>Sign up </Button>

      <h1>Hello legit app users </h1>
      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
