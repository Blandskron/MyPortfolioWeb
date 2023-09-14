import React from 'react';
import './StyleTitleSection.css';
import perfilImage from '../../assets/perfil.jpg';

function TitleSection() {
  return (
    <article class="title">
        <div class="title_info">
            <h1>Hello World</h1>
            <h2>My name is</h2>
            <h2>Bastian Landskron</h2>
            <nav class="Social">
                <ul class="menu__social">
                    <li class="social__menu"><a href="https://github.com/Blandskron" target="_blank">Github</a></li>
                    <li class="social__menu"><a href="https://www.linkedin.com/in/blandskron/" target="_blank">LinkedIn</a></li>
                    <li class="social__menu"><a href="pdf/CVBlandskron.pdf" download="CVBlandskron" target="_blank">Cv</a></li>
                    <li class="social__menu"><a href="pdf/LetterBlandskron.pdf" download="LetterBlandskron" target="_blank">Letter for recruiter</a></li>
                </ul>
            </nav>
        </div>
        <div className="imgDiv">
          <img className='imgPerfil' src={perfilImage} alt="Foto de perfil bastian landskron" />
        </div>
    </article>
  );
}

export default TitleSection;