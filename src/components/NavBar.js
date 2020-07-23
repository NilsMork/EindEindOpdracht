import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav>
        <ul className="nav-links">
            <Link to="/"><li>Home</li></Link>
            <Link to="/StudentContainer"><li>Students</li></Link>
        </ul>
    </nav>
  );
}

export default NavBar;
