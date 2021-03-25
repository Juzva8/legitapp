import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './ImageUpload.css'
import firebase from 'firebase';
import { db, storage } from '../../firebase'


function ImageUpload({ username }) {
    const [image, setImage] = useState(null)
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
                
                    setCaption("");
                    setImage(null);
                });

            }
        )
    }
    
    return (
        <div className="imageupload">
    
        <input type="text" placeholder="Enter a caption" onChange={event => setCaption(event.target.value)} value={caption} />
        <input type="file" onChange={handleChange} />
        <Button onClick={handleUpload}>
        Upload </Button>
        </div>
    )
}

export default ImageUpload
