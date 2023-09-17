import React from 'react';
import './hardstyle.css'

function HardSkills() {
  return (
    <div className="HardSkills">
      <h2>HardSkills</h2>
      <div className='badgeContainer'>
        <div className='programmingLanguages'>
          <h3>Programming Languages:</h3>
          <img className='badge' alt="Static Badge" src="https://img.shields.io/badge/Python-%233776AB?style=flat&logo=python&logoColor=%233776AB&labelColor=white&color=%233776AB" />
          <img className='badge' alt="Static Badge" src="https://img.shields.io/badge/CSS3-%231572B6?style=flat&logo=css3&logoColor=%231572B6&labelColor=white&color=%231572B6" />
          <img className='badge' alt="Static Badge" src="https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat&logo=javascript&logoColor=%23F7DF1E&labelColor=black&color=%23F7DF1E" />
          <img className='badge' alt="Static Badge" src="https://img.shields.io/badge/HTML5-%23E34F26?style=flat&logo=html5&logoColor=%23E34F26&labelColor=white&color=%23E34F26" />
        </div>
        <div className='frameworksLibraries'>
          <h3>Web Development Frameworks and Libraries:</h3>
          <img className='badge' alt="Static Badge" src="https://img.shields.io/badge/React-%2361DAFB?style=flat&logo=react&logoColor=%2361DAFB&labelColor=black&color=%2361DAFB" />
          <img className='badge' alt="Static Badge" src="https://img.shields.io/badge/Vue.js-%234FC08D?style=flat&logo=vue.js&logoColor=%234FC08D&labelColor=white&color=%234FC08D" />

        </div>

      </div>
    </div>
  );
}

export default HardSkills;
