import React, {Component} from 'react'
import Cookies from 'js-cookie'
import './App.css';

class Profile extends Component {
  constructor (props){
        super(props);
        this.state = {
          isLoggedIn: !!Cookies.get('Authorization'),
          username: "",
          email: "",
          password1: "",
          password2: "",
        }
    this.handleInput = this.handleInput.bind(this);
    this.submitPhoto = this.submitPhoto.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.editPhoto = this.editPhoto.bind(this);
      }

handleInput(event){
      this.setState({[event.target.name]: event.target.value});
    }

async submitPhoto(e){
  e.preventDefault();

  let formData = new FormData();
  formData.append('profile_picture', this.state.profile_picture);
  formData.append('user', 1);


const options = {
  method: 'POST',
  headers: {
    'X-CSRFToken': Cookies.get('csrftoken'),
  },
  body: formData,
}

await fetch('/profiles/', options);
}

handleImage(e){

//this is taking the selected image from our decice and storing it in state
let file = e.target.files[0]
this.setState({profile_picture: file,})

let reader = new FileReader()
reader.onloadend = () => {
  this.setState({
    preview: reader.result
  });
}

reader.readAsDataURL(file);
}

async editPhoto(e){
  e.preventDefault();

  let formData = new FormData();
  formData.append('profile_picture', this.state.profile_picture);
  formData.append('user', 1);


const options = {
  method: 'PUT',
  headers: {
    'X-CSRFToken': Cookies.get('csrftoken'),
  },
  body: formData,
}

await fetch('/profiles/images/', options);
}




      render(){

const profileLog = this.state.isLoggedIn === true ? <p>Welcome! Please make a profile to leave a comment.</p>: null
const photoSubmit = <form onSubmit={this.submitPhoto}>
  <input type="file" name="profile_picture" onChange={this.handleImage}/>
{this.state.profile_picture && <img width="500" src={this.state.preview} alt="preview" />}
<button type="submit">Save</button>
{localStorage.user === this.props.username ? <button onClick={this.editPhoto}>Edit</button> : null}
</form>

        return(
          <div>
          {profileLog}
          {photoSubmit}</div>
        );
      }
    }
    export default Profile
