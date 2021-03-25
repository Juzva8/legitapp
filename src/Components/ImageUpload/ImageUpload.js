import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './ImageUpload.css'
import firebase from 'firebase';
import { db, storage } from '../../firebase'


function ImageUpload({ username }) {
    const [image, setImage] = useState(null)
    const [setProgress] = useState(0)
    const [caption, setCaption] = useState('') 

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "stateChanged",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.TotalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url =>{
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageUrl: url,
                        username: username,
                    });
                    setProgress(0);
                    setCaption("");
                    setImage(null);
                });

            }
        )
    }
    
    return (
        <div className="messageSender">
        <div className ="messageSender__top">
        <Avatar 
            className="post__avatar" 
            alt={username} 
            src="/static/images/avatar/1.jpg"/>
        <form>
        
        <input type="text" placeholder="Enter a caption" onChange={event => setCaption(event.target.value)} value={caption} />
        <input type="file" onChange={handleChange} />
        <Button onClick={handleUpload}>
        Upload </Button>
        </form>
        
        </div>
        </div>
    )
}

export default ImageUpload
