import React, {Component} from 'react'
import Cookies from 'js-cookie';
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    this.handleLogout = this.handleLogout.bind(this);
      }




  handleInput(event){
        this.setState({[event.target.name]: event.target.value});
      }

  handleChange(event){
        this.setState({[event.target.name]: event.target.value});
      }






    async handleLogout(e, obj){
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
    const response = await fetch('/rest-auth/logout/', options);
    const data = await response.json().catch(handleError);

    // if(data.key) {
    Cookies.remove('Authorization', `Token ${data.key}`);
    // }
    }


  render(){








    const logoutForm = (<form onSubmit={(e) => this.handleLogout(e, this.state)}>
          <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
          <button className="btn-primary" type="submit">Log Out</button>
          </form>)

    const loggedInUserName = this.state.isLoggedIn === true ? <p>Hello, logged in person</p> : <p>Hello, NOT LOGGED IN GUEST</p>


      return (
    <div className="App">
    <p><Register /></p>
    <p><Login /></p>
    <p><Profile /></p>
      {logoutForm}
      {loggedInUserName}
    </div>
  );
}
}
export default App;
