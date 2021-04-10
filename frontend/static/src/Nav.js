import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';


class Nav extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){

  return(
    <div className="navlinks navbar">
    <NavLink to="/">Articles</NavLink>
    <NavLink to="/articles/archives/">Archives</NavLink>
    {this.props.isLoggedIn === true ? <NavLink to="/articles/edit/drafts/">Drafts</NavLink> : null}
    {this.props.isLoggedIn === true ? <NavLink to="/profiles/">Profile</NavLink> : null}
    </div>
  );
}
}
export default Nav;
