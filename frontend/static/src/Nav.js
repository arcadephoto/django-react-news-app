import {NavLink} from 'react-router-dom';



function Nav(props) {


  return(
    <div className="navbar">
    <NavLink to="/articles/">Articles</NavLink>
    <NavLink to="/articles/archives/">Archives</NavLink>
    <NavLink to="/articles/edit/drafts/">Drafts</NavLink>
    <NavLink to="/profiles/">Profile</NavLink>
    </div>
  );
}

export default Nav;
