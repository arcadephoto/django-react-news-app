import React, {Component} from 'react'
import Cookies from 'js-cookie';
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import Articles from './Articles'
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



      return (

    <div className="container">
    <div className="row headerbar">
    <div className="col-8"><Login /></div>
    <div className="col-2">{this.state.isLoggedIn === true ? <p>Welcome, logged in person!</p> : null}</div>
    <div className="col-2">{logoutForm}</div>
    </div>
    <div className="row">
    <div className="col-8">{this.state.isLoggedIn === false ? <Register /> : null}</div>
    <div className="col-4">{this.state.isLoggedIn === true ? <><p>Welcome! Please make a profile to leave a comment.</p><Profile /></> : null}</div>
    </div>
    <div className="row"><Articles /></div>
    </div>
  );
}
}
export default App;
