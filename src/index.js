import React from 'react';
import ReactDOM from 'react-dom/client';
import  P  from './components/paragraphLink/ParagraphLink'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <p href="http" > texto</p>*/}
    <P href="https://legacy.reactjs.org/" pepito="Yo merengues" color ="green">Página React</P>
    <P href="https:youtube.com" color="orange">Página Youtube</P>
    <P href="https:linkedin.com" color= "pink">Página Linkedin</P>
    <P href="https:linkedin.com/goyo" color="blueviolet">Página Goyo</P>
   
  </React.StrictMode>
);

