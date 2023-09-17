import React from 'react';
import './StyleNav.css';

function NavBar() {
  return (
      <header className='headerNav'>
        <a href='https://github.com/Blandskron' target={'_blank'}><img className='badgeNav' alt="Static Badge" src="https://img.shields.io/badge/GitHub-%23181717?style=flat&logo=github&logoColor=%23181717&labelColor=white&color=%23181717" /></a>
        <a href='https://www.linkedin.com/in/blandskron/' target={'_blank'}><img className='badgeNav' alt="Static Badge" src="https://img.shields.io/badge/LinkedIn-%230A66C2?style=flat&logo=linkedin&logoColor=%230A66C2&labelColor=white&color=%230A66C2" /></a>
        <a href='https://twitter.com/Blandskron_com' target={'_blank'}><img className='badgeNav' alt="Static Badge" src="https://img.shields.io/badge/X%2FTwitter-%23000000?style=flat&logo=X&logoColor=%23000000&labelColor=white&color=%23000000" /></a>
        <a href='https://www.instagram.com/blandskron.com_/' target={'_blank'}><img className='badgeNav' alt="Static Badge" src="https://img.shields.io/badge/Instagram-%23E4405F?style=flat&logo=instagram&logoColor=%23E4405F&labelColor=white&color=%23E4405F" /></a>
      </header>
  );
}

export default NavBar;