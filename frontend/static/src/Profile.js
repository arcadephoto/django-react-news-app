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
      }

handleInput(event){
      this.setState({[event.target.name]: event.target.value});
    }

async submitPhoto(e){
  e.preventDefault();

  let formData = new FormData();
  formData.append('profile_picture', this.state.profile_picture);
  formData.append('user', 1);

  //I think the 1 above is what's interrupting the submission

const options = {
  method: 'POST',
  headers: {
    'X-CSRFToken': Cookies.get('csrftoken'),
  },
  body: formData,
}

const response = await fetch('/profiles/', options);
console.log(response);
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





      render(){


const photoSubmit = <form onSubmit={this.submitPhoto}>
  <input type="file" name="profile_picture" onChange={this.handleImage}/>
{this.state.profile_picture && <img width="500" src={this.state.preview} alt="preview" />}
<button type="submit">Save</button>
</form>

        return(
          <div>
          {photoSubmit}</div>
        );
      }
    }
    export default Profile
