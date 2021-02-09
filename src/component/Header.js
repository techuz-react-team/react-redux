import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <nav>
            <section>
                <h1>React Redux demo</h1>

                <div className="navContent">
                <div className="navLinks">
                <div className="navLinks">
                    <Link to="/">Posts</Link>
                    <Link to="/create-post">Create Post</Link>
                </div>
                </div>
                </div>
            </section>
            </nav>
        </div>
    )
}

export default Header;