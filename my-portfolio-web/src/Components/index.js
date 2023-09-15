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
    hljs.highlightBlock(document.querySelector('.cod'));
  }, [code]);

  return (
    <pre className='codContainer'>
      <code className="cod">{code}</code>
    </pre>
  );
}

export default CodeHighlighter;
