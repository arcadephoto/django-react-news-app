import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom';
import Cookies from 'js-cookie';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Articles from './Articles';
import Nav from './Nav';
import Drafts from './Drafts';
import Archives from './Archives';
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
    }

setUser(user){
  this.setState({username: user.username})
}

  render(){

    const submitButton = localStorage.user ? <button className="btn" onClick={this.showSubmitWindow}>Submit "News"</button> : null
const submitWindow = this.state.submitWindow === true ? <p><textarea placeholder="Title your submission" type="text" name="title" value={this.state.title} onChange={this.handleInput}/><textarea className="form-control" rows="5" type="text" name="body" value={this.state.body} onChange={this.handleInput}/><button className="btn" onClick={this.saveDraft}>Save Draft</button></p> : null
    const logoutForm = (<form onSubmit={(e) => this.handleLogout(e, this.state)}>
          <button className="btn" type="submit">Log Out</button>
          </form>)



      return (

    <div className="container">
    <div className="row headerbar">
    <div className="col-8">{!localStorage.user ? <Login setUser={this.setUser}/> : null}</div>
    <div className="col-2">{localStorage.user ? <p>Welcome, {localStorage.user}!</p> : null}{submitButton}</div>
    <div className="col-2">{localStorage.user ? logoutForm : null}</div>
    <div className="row"><Nav /></div>
    </div>
    <div className="row">
    <div className="col-8"></div>
    <div className="col-4"></div>
    </div>
    <div className="row"></div>
    <div className="row">{submitWindow}</div>
    <React.Fragment>
    <Switch>
      <Route path="/articles/edit/drafts/" component={Drafts}/>
      <Route path="/articles/archives/" component={Archives}/>
      <Route path="/articles/" children={<Articles showSubmitWindow={this.showSubmitWindow} submitWindow={this.state.submitWindow}/>} />
      <Route path="/profiles/" children={<Profile user={this.state.user}/>}/>
    </Switch>
    </React.Fragment>
    </div>
  );
}
}
export default App;
