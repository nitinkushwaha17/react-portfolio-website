import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <div className="nav_bar">
			<div id="name">
				<p id="brand">NK</p>
				<p><span id="highlight">Nitin</span> Kushwaha</p>
			</div>
			<nav>
				<ul>
					<li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
					<li>
                        <Link to='/AboutMe'>
                            About Me
                        </Link>
                    </li>
					<li>
                        <Link to='/Skills'>
                            Skills
                        </Link>
                    </li>
					<li>
                        <Link to='/Projects'>
                            Projects
                        </Link>
                    </li>
				</ul>
			</nav>
			<div className="burger">
				<div className="b1"></div>
				<div className="b2"></div>
				<div className="b3"></div>
			</div>
        </div>
  );
}

export default Navbar;