import React from "react";
import { Figure } from "react-bootstrap";
//import { FigureCaption } from "react-bootstrap";

function Page(props) {
  return (
    <header>
      <h1>{props.title}</h1>; {/* Semicolon added here */}
      <div dangerouslySetInnerHTML={{ __html: props.text }}></div>  
      <Figure>
        <img src={`${'https://auto-savke.com/frontend/web/uploads/master/' + props.image }` }   alt="img" title="Slika" />
      </Figure>           
    </header>
  );
}

export default Page;