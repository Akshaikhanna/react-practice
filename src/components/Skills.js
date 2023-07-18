import React from "react";
import "./Navbar.css";
import html from "../image/html.png";
import css from "../image/css.png";
import js from "../image/javascript.png";
import react from "../image/react.png";

const Skills = () => {
  return (
    <div className="home1">
      <div>
        <img src={html} className="html" />
        <p className="htmlpara">
          The standard markup language for constructing web pages is HyperText
          Markup Language (HTML). It is the most fundamental building block for
          creating web pages.HTML elements are the building blocks of HTML
          pages.
        </p>
        <p className="htmlpara1">Rate-4.5/5</p>
      </div>
      <div>
        <img src={css} className="css" />
        <p className="csspara">
          CSS (Cascading Style Sheets) is the language that is used to present
          the HTML document. HTML is used to lay the groundwork for your
          website. CSS, on the other hand, is used to create the page’s layout,
          colour, fonts, and style. Both of these languages are required to work
          as front-end developers.
        </p>
        <p className="csspara1">Rate-4.5/5</p>
      </div>
      <div>
        <img src={js} className="js" />
        <p className="jspara">
          JavaScript is required to run online gaming, quizzes, and animations.
          JavaScript ES6 adds new syntax and great functionality to your code,
          making it more contemporary and readable. It enables you to write less
          code while doing more.
        </p>
        <p className="jspara1">Rate-4/5</p>
      </div>
      <div>
        <img src={react} className="react" />
        <p className="reactpara">
          React is a JavaScript library for building user interfaces. React is
          used to build single-page applications. React allows us to create
          reusable UI components.
        </p>
        <p className="reactpara1">Rate-4.5/5</p>
      </div>
    </div>
  );
};

export default Skills;
