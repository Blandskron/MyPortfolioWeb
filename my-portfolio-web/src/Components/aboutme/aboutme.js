import React from 'react';
import './aboutme.css';
import CodeHighlighter from '../index.js';

function Aboutme() {
  const code = `
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
    <div className='aboutme'>
      <CodeHighlighter code={code} />
    </div>
  );
}

export default Aboutme;