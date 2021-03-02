import React, { useState, useEffect } from 'react'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import logo from './Assets/logo_transp.png';
import Post from './Components/Post/Post';
import { db, auth } from './firebase'
import { Button, Input } from '@material-ui/core';


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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

    useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((autUser) => {
    if (autUser) {
      console.log(autUser);
      setUser(autUser);
      if (autUser.displayName){

      }else{
        return autUser.updateProfile({
          displayName: username,
        });
      }
    } else {
      setUser(null);
    }
    }) 
    } , [user, username]);

  useEffect(() => {

  db.collection('posts').onSnapshot(snapshot => {
    setPosts(snapshot.docs.map(doc => ({
      id: doc.id,
      post: doc.data()
      })));
      })
      }, [])

      const signUp =(event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message));
      }

  return (
       <div className="app">
           <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
        <form className="app__signup">
       <center>
      <img className="app__headerImage" src={logo} alt="legit app logo" />
      </center>
      <Input
      placeholder="username"
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)} />
      <Input 
      placeholder="email"
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)} />
      <Input 
      placeholder="password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" onClick={signUp}>Sign up</Button>
      </form>
       
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
