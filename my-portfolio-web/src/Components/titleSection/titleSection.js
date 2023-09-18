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
        </div>
        <div className='column'>
          <img className='imgPerfil' src={perfilImage} alt="Foto de perfil bastian landskron" />
          <a href="/BlandskronCV2023.pdf" download>Download CV</a>
        </div>
    </article>
  );
}

export default TitleSection;