import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './Login';
import Profile from './Profile';
import Articles from './Articles';
import Nav from './Nav';
import Drafts from './Drafts';
import Archives from './Archives';
import logo from './truth2.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor (props){
        super(props);
        this.state = {
          frontPage: true,
          isLoggedIn: !!Cookies.get('Authorization'),
          username: "",
          email: "",
          password:"",
          password1: "",
          password2: "",
          profile_picture: "",
          user: {},
        }
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.setUser = this.setUser.bind(this);
    this.showSubmitWindow = this.showSubmitWindow.bind(this);
    this.saveDraft = this.saveDraft.bind(this);
      }




  handleInput(event){
        this.setState({[event.target.name]: event.target.value});
      }

  handleChange(event){
        this.setState({[event.target.name]: event.target.value});
      }

  showSubmitWindow(){
    this.setState({submitWindow: true})
      }

      async saveDraft(){
        // e.preventDefault();
        const post = {body: this.state.body, title: this.state.title}
        this.setState({submitWindow: false})
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
          },
          body: JSON.stringify(post),
        };
        const handleError = (err) => console.warn(err);
        const response = await fetch(`/articles/edit/drafts/submit/`, options);
        await response.json().catch(handleError);

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
    Cookies.remove('Authorization', `Token ${data.key}`);
    localStorage.clear()
    this.setState({username: ""})
    window.location.reload()
    }

setUser(user){
  this.setState({username: user.username})
}

  render(){

    const submitButton = localStorage.user ? <button className="btn submitNewsButton" onClick={this.showSubmitWindow}>Submit</button> : null
const submitWindow = this.state.submitWindow === true ? <p><textarea placeholder="Title your submission" type="text" name="title" value={this.state.title} onChange={this.handleInput}/><textarea className="form-control" rows="5" type="text" name="body" value={this.state.body} onChange={this.handleInput}/><button className="btn" onClick={this.saveDraft}>Save Draft</button></p> : null
    const logoutForm = this.state.isLoggedIn ? (<form onSubmit={(e) => this.handleLogout(e, this.state)}>
          <button className="btn" type="submit">Log Out</button>
          </form>) : null



      return (

    <div className="container">
    <div className="row headerbar sticky-top">{submitButton}
    <div className="col-sm-8"><img className="logo w-75" src={logo} alt="logo"/></div>
    <div className="col-sm-2">{localStorage.user ? <p>Welcome, {localStorage.user}!</p> : null}<p className="logLine d-none d-md-block">Real, truthfully factual information from professional newsologists!</p></div>
    <div className="col-sm-2"><div className="loginButton"></div>{!localStorage.user ? <Login setUser={this.setUser}/> : null}{logoutForm}</div>
    <div className="row"><Nav isLoggedIn={this.state.isLoggedIn}/></div>
    </div>


    <div className="row"></div>
    <div className="row">{submitWindow}</div>
    <React.Fragment>
    <Switch>
      <Route path="/articles/edit/drafts/" component={Drafts}/>
      <Route path="/articles/archives/" children={<Archives className="mainArchive"/>}/>
      <Route path="/" children={<Articles showSubmitWindow={this.showSubmitWindow} submitWindow={this.state.submitWindow}/>} />
      <Route path="/profiles/" children={<Profile user={this.state.user}/>}/>
    </Switch>
    </React.Fragment>
    </div>
  );
}
}
export default App;
