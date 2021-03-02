import React from 'react'
import './Post.css'
import Avatar  from '@material-ui/core/Avatar';


function Post() {
    return (
        <div className="post">
            <div className="post__header">
            </div>
            <Avatar className="post__avatar" alt="Juzva8" src="/static/images/avatar/1.jpg"
            />
            <h3>Username</h3>

            {/* header -> avatar + username */}
            <img className="Post__image" src="https://avatars.githubusercontent.com/u/72834046?s=460&u=13200316b9a5b284830062c1c1bf2a347616e043&v=4" alt="post"/>
      
            <h4 className="Post__text"><strong>Juzva8</strong> coding a lot</h4>
         

        </div>
    )
}

export default Post
