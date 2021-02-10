import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>React Redux Test demo</h1>

        <div className="navContent">
          <div className="navLinks">
          <Link to="/">Posts</Link>
          <Link to="/add-post">Add Post</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
