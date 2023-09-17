import React from 'react';
import './StyleNav.css';

function NavBar() {
  return (
      <header className='headerNav'>
        <nav class="menu__headlist">
            <ul class="menu__list">
              <li><a href="#About">About</a></li>
              <li><a href="#Soft">Soft Skills</a></li>
              <li><a href="#HardSkills">Hard Skills</a></li>
            </ul>
        </nav>
      </header>
  );
}

export default NavBar;