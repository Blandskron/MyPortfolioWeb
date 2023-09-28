import React from 'react';
import './StyleTitleSection.css';
import perfilImage from '../../assets/perfil.jpg';

function TitleSection() {
  return (
    <article className="title">
        <div className="column">
          <h1>Hello, World!</h1>
          <h2>My name is</h2>
          <h3>Bastian Landskron</h3>
          <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=B2BED7&center=true&vCenter=true&width=435&lines=Full-Stack+Developer" alt="Typing SVG" /></a>
        </div>
        <div className='column'>
          <img className='imgPerfil' src={perfilImage} alt="Foto de perfil bastian landskron" />
          <a href="/BlandskronCV2023.pdf" download>Download CV</a>
        </div>
    </article>
  );
}

export default TitleSection;