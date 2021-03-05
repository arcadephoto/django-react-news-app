import React, {Component} from 'react'
import Cookies from 'js-cookie'
import './App.css';

class Login extends Component {
  constructor (props){
        super(props);
        this.state = {
          isLoggedIn: !!Cookies.get('Authorization'),
          username: "",
          email: "",
          password: "",
          data: [],
        }
    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.reset = this.reset.bind(this);
      }

reset(){
  this.setState({username: ""})
  this.setState({password: ""})
  window.location.reload();
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
    this.props.setUser(data.username)
    localStorage.setItem("user", data.username)
    localStorage.setItem("id", data.id)
    this.reset();
    }
  }




  handleInput(event){
        this.setState({[event.target.name]: event.target.value});
      }


    render(){
const loginForm = (<form onSubmit={(e) => this.handleLogin(e, this.state)}>
      <input className="input-group" type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
      <input className="input-group" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleInput}/>
      <p><button className="btn" type="submit">Log In</button></p>
      </form>)

      return(
        <div>
        {loginForm}
        </div>
      );
    }
  }
  export default Login
