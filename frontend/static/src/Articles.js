import React, {Component} from 'react'
import Cookies from 'js-cookie'
import Archives from './Archives'
import './App.css';

class Articles extends Component {
  constructor (props){
        super(props);
        this.state = {
          isLoggedIn: !!Cookies.get('Authorization'),
          data: [],
          text: "",
          editText: "",
          isEditing: false,
          edited: false,
          submitWindow: false,
          body: "",
          title: "",
          editWindow: null,
        }

this.editArticle = this.editArticle.bind(this);
this.handleInput = this.handleInput.bind(this);
this.submitEdit = this.submitEdit.bind(this);
this.saveDraft = this.saveDraft.bind(this);

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




editArticle(data){
  this.setState({editWindow: data.id})
  this.setState({isEditing: true})
  const body = data.body
  this.setState({editText: body})

}
async submitEdit(edit){
  // e.preventDefault();
  edit.body = this.state.editText
  this.setState({isEditing: false})
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(edit),
  };
  const handleError = (err) => console.warn(err);
  const response = await fetch(`/articles/edit/${edit.id}/`, options);
  await response.json().catch(handleError);

}






componentDidMount(){
  fetch("/articles/")
    .then(response => response.json())
    .then(response => this.setState({data: response}));
          }

handleInput(event){
      this.setState({[event.target.name]: event.target.value});
    }



      render(){


        const content = this.state.data.map((data) => (
          <section className="card" key={data.id}>
          <h1>{data.title}</h1>
          <p>By: {data.owner}</p>
          {this.state.edited === false ? <p>{data.body}</p> : <p>{this.state.id.body}</p>}
          {data.owner === localStorage.user ? <button className="btn" onClick={() => this.editArticle(data)}>Edit</button> : null}
          {this.state.isEditing === true & data.owner === localStorage.user & this.state.editWindow === data.id ? <p><textarea className="form-control" rows="5" type="text" name="editText" value={this.state.editText} onChange={this.handleInput}/><button className="btn" onClick={()=> this.submitEdit(data)}>Submit Edit</button></p> : null}
          </section>
        ))



        return(
          <div className="row">
          <div className="col g-0 col-xxl-auto">
          {content}
          </div>
          <div className="col-4 archiveColumn d-none d-md-block">
          <h4>From the Archives of Truth:</h4>
          <Archives className="frontArchive"/>
          </div>
              </div>
        );
        }
      }
export default Articles
