import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div class="nav-wrapper blue">
        <a href="" class="brand-logo">
          Google Books
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/">Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
