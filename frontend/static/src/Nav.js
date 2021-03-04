import {NavLink} from 'react-router-dom';



function Nav(props) {


  return(
    <ul>
    <li><NavLink to="/rest-auth/registration">Register</NavLink></li>
    <li><NavLink to="/articles/">Article</NavLink></li>
    </ul>
  );
}

export default Nav;
