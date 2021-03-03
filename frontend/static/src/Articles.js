import React, {Component} from 'react'
import Cookies from 'js-cookie'
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
        }

this.editArticle = this.editArticle.bind(this);
this.handleInput = this.handleInput.bind(this);
this.handleEdit = this.handleEdit.bind(this);
this.finishEdit = this.finishEdit.bind(this);


}

editArticle(data){
  this.setState({isEditing: true})
  const body = data.body
  this.setState({editText: body})
}


finishEdit(data){
  data.body = this.state.editText
  this.setState({isEditing: false})
}

componentDidMount(){
  fetch("/articles/")
    .then(response => response.json())
    .then(response => this.setState({data: response}));
          }

handleInput(event){
      this.setState({[event.target.name]: event.target.value});
    }


handleEdit(event) {
if (event.keyCode === 13) {
  this.setState({text: this.state.editText})
  this.setState({
    isEditing: false
  });
}
}

      render(){
        const content = this.state.data.map((data) => (
          <section className="card" key={data.id}>
          <h1>{data.title}</h1>
          <p>By: {data.owner}</p>
          {this.state.edited === false ? <p>{data.body}</p> : <p>{this.state.id.body}</p>}
          {data.owner === localStorage.user ? <button onClick={() => this.editArticle(data)}>Edit</button> : null}
          {this.state.isEditing === true & data.owner === localStorage.user ? <p><textarea className="form-control" rows="5" type="text" name="editText" value={this.state.editText} onChange={this.handleInput}/><button onClick={()=> this.finishEdit(data)}>Finish Edit</button></p> : null}
          </section>
        ))



        return(
          <div>{content}
              </div>
        );
        }
      }
export default Articles
