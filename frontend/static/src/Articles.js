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
}


  componentDidMount(){
    fetch("/articles/")
      .then(response => response.json())
      .then(response => this.setState({data: response}));
            }

      render(){

        console.log(this.state.data)
        const content = this.state.data.map((data) => (
          <section key={data.id}>
          <h1>{data.title}</h1>
          <p>By: {data.author}</p>
          <p>{data.body}</p></section>
        ))


        return(
          <div>{content}</div>
        );
        }
      }
export default Articles
