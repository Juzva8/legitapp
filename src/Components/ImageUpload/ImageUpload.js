import { Input, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './ImageUpload.css'
import { storage, db } from '../../firebase'

function ImageUpload() {
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const [caption, setCaption] = useState('') 

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleUpload = () => {


    }
    
    return (
        <div>
        <h1> Hello legit</h1>
        {/* I need ... */} 
        {/* caption input */}
        {/* file picker a */}
        {/*post button*/}
        <input type="text" placeholder="Enter a caption" onChange={event => setCaption(event.target.value)} value={caption} />
        <input type="file" onChange={handleChange} />
        <Button className="imageupload__button" onClick={handleUpload}>
        upload </Button>
        </div>
    )
}

export default ImageUpload
