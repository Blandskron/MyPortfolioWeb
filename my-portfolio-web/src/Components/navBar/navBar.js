import React from 'react';
import './StyleNav.css';

function NavBar() {
  return (
      <header className='headerNav'>
        <nav class="menu__headlist">
            <ul class="menu__list">
                <li className=''><a href="#About">About</a></li>
                <li class="list__menu"><a href="#Soft">Soft Skills</a></li>
                <li class="list__menu"><a href="#Hard">Hard Skills</a></li>
            </ul>
        </nav>
      </header>
  );
}

export default NavBar;