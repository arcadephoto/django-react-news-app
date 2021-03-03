import React, {Component} from 'react'
import Cookies from 'js-cookie'
import './App.css';

class Articles extends Component {
  constructor (props){
        super(props);
        this.state = {
          isLoggedIn: !!Cookies.get('Authorization'),
          data: [],
        }

this.editArticle = this.editArticle.bind(this);


}

editArticle(){
  console.log("Edit!")
}

componentDidMount(){
  fetch("/articles/")
    .then(response => response.json())
    .then(response => this.setState({data: response}));
          }



      render(){
        console.log(this.state.data)
        const content = this.state.data.map((data) => (
          <section className="card" key={data.id}>
          <h1>{data.title}</h1>
          <p>By: {data.owner}</p>
          <p>{data.body}</p>
          {data.owner === localStorage.user ? <button onClick={this.editArticle}>Edit</button> : null}</section>
        ))


        return(
          <div>{content}</div>
        );
        }
      }
export default Articles
