import React from 'react';
import './hardstyle.css'

function HardSkills() {
  return (
    <div className="HardSkills">
      <h3>HardSkills</h3>
      <div className='badgeContainer'>
        <img className='badge' alt="Static Badge" src="https://img.shields.io/badge/Javascript-white?style=flat&logo=javascript&logoColor=%23F7DF1E&labelColor=black&color=%23F7DF1E" />
        <img className='badge' alt="Static Badge" src="https://img.shields.io/badge/Github-white?style=flat&logo=github&logoColor=black&labelColor=white&color=black" />
      </div>
    </div>
  );
}

export default HardSkills;
