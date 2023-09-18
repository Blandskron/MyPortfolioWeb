import React, { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github-dark.css';
import './styles.css';

// Registra el lenguaje de programación que deseas utilizar
hljs.registerLanguage('javascript', javascript);

function CodeHighlighter({ code }) {
  useEffect(() => {
    // Resalta el código en el elemento con la ref "codeElement"
    hljs.highlightBlock(document.querySelector('.codStyle'));
  }, [code]);

  return (
    <div className='fullContainer'>
      <div className='headNav'>
        <div className='circule'>
          <div className='circle1'></div>
          <div className='circle2'></div>
          <div className='circle3'></div>
        </div>
        <div className='nameSection'>
          <h4>About Me</h4>
        </div>
        <div className='iconSection'>
          <img alt="Static Badge" src="https://img.shields.io/badge/X-%234D4D4D?style=flat&logo=windows%20terminal&logoColor=%234D4D4D&labelColor=white&color=%234D4D4D" />
        </div>
      </div>
      <pre className='codContainer'>
        <code className='codStyle'>{code}</code>
      </pre>
    </div>
  );
}

export default CodeHighlighter;
