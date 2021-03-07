import React, {Component} from 'react'
import Cookies from 'js-cookie'
import bottles from './bottles.png'
import './App.css';

class Archives extends Component {
  constructor (props){
        super(props);
        this.state = {
          isLoggedIn: !!Cookies.get('Authorization'),
          data: [],
        }
}


  componentDidMount(){
    fetch("/articles/archives/")
      .then(response => response.json())
      .then(response => this.setState({data: response}));
            }


displayArticle(data){
  alert(data.body)
}

  render(){
    const content = this.state.data.map((data) => (
      <section className="card" key={data.id}>
      <img className="card-img-top archivePhotos" src={bottles} alt="bottles" />
      <h1><a href="./archives/">{data.title}</a></h1>
      <p>By: {data.owner}</p>
      <p>{data.body}</p>
      </section>
))

    return(
      <div>
      {content}
      </div>
    );
  }
}

export default Archives
