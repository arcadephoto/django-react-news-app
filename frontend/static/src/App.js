import React, {Component} from 'react'
import Cookies from 'js-cookie';
import './App.css';

class App extends Component {
  constructor (props){
        super(props);
        this.state = {
          isLoggedIn: !!Cookies.get('Authorization'),
          username: "",
          email: "",
          password:"",
          password1: "",
          password2: "",
          profile_picture: "",
        }
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.submitPhoto = this.submitPhoto.bind(this);
      }




  handleInput(event){
        this.setState({[event.target.name]: event.target.value});
      }

  handleChange(event){
        this.setState({[event.target.name]: event.target.value});
      }

  async handleLogin(e, obj){
    e.preventDefault();

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(obj),
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/login/', options);
    const data = await response.json().catch(handleError);

    if(data.key) {
    Cookies.set('Authorization', `Token ${data.key}`);
    }

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

    const response = await fetch('/profiles/', options);
    console.log(response);
    }




  render(){


    const photoSubmit = <form onSubmit={this.submitPhoto}>
      <input type="file" name="profile_picture" onChange={this.handleImage}/>
    {this.state.profile_picture && <img width="500" src={this.state.preview} alt="preview" />}
    <button type="submit">Save</button>
    </form>

    const loginForm = (<form onSubmit={(e) => this.handleLogin(e, this.state)}>
          <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
          <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleInput}/>
          <p><button className="btn btn-primary" type="submit">Log In</button></p>
          </form>)

    const registerForm = (<form onSubmit={(e) => this.handleRegistration(e, this.state)}>
          <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
          <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
          <input type="password" placeholder="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
          <input type="password" placeholder="confirm pass" name="password2" value={this.state.password2} onChange={this.handleInput}/>
          <p><button className="btn-primary btn" type="submit">Register</button></p>
          </form>)

      return (
    <div className="App">
      {registerForm}
      {loginForm}
      {photoSubmit}
    </div>
  );
}
}
export default App;
