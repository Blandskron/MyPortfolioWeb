import React from 'react';
import './StyleTitleSection.css';
import perfilImage from '../../assets/perfil.jpg';
import CodeHighlighter from '../index.js';

function TitleSection() {
  const codigoEjemplo = `
  // Define the variable name
  var name = "Bastian Landskron";
  
  // Define the function that uses the name
  function myNameIs(name) {
    console.log("My name is " + name);
  }
  
  // Define the greeting function
  function greet() {
    console.log('Hello, World!');
  }
  
  // Call the greeting function
  greet();
  // This will print "Hello, World!" in the console

  // Call the function that displays the name
  myNameIs(name);
  /* This will print 
  "My name is Bastian Landskron" 
  in the console */
  
  `;

  return (
    <article className="title">
        <div className="column">
          <CodeHighlighter code={codigoEjemplo} />
        </div>
        <div className="column">
          <h1>Hello, World!</h1>
          <h2>My name is</h2>
          <h2>Bastian Landskron</h2>
          <img className='imgPerfil' src={perfilImage} alt="Foto de perfil bastian landskron" />
          <nav className="Social">
                <ul>
                    <li><a href="/BlandskronCV2023.pdf" download>Download CV</a></li>
                    <li></li>
                </ul>
            </nav>
        </div>
    </article>
  );
}

export default TitleSection;