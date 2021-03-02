import './App.css';
import logo from './Assets/logo_transp.png';
import Post from './Components/Post/Post';


function App() {
  return (
    <div className="app">
   
      <div className="app__header">
        <img src= {logo} alt="legit logo"/>
      </div>

      <h1>Hello legit app users </h1>
      <Post 
      username="Other user" 
      caption="Wow it works" 
      imageUrl="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/s320x320/55903546_321861358406531_8089998693643583488_n.jpg?tp=1&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_ohc=bFPXwzE57JoAX8w_NHI&oh=bd859f1e66541751cb89cf4af24f83bb&oe=6066D496" />
      <Post 
      username="Juzva8" 
      caption="Dope" 
      imageUrl="https://avatars.githubusercontent.com/u/72834046?s=460&u=13200316b9a5b284830062c1c1bf2a347616e043&v=4"
      />
      <Post />
    {/* Header */}
    {/* Posts */}
    {/* Posts */}
    


    </div>
  );
}

export default App;
