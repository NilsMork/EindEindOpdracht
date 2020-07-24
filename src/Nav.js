import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <ul className="nav-links">
            <Link to="/"><li>Home</li></Link>
            <Link to="/Storm"><li>Storm</li></Link>
            <Link to="/Wietske"><li>Wietske</li></Link>
            <Link to="/Sandra"><li>Sandra</li></Link>
            <Link to="/Rahima"><li>Rahima</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;
