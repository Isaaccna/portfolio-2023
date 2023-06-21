import { Heading } from "../heading";
import { Skill } from "./skill";


import ReactLogo from'../../assets/logos/react-logo.png'
import  JSLogo from "../../assets/logos/js-logo.png"
import CSSLogo from '../../assets/logos/css-logo.png';
import Nodejs from '../../assets/logos/nodejs-logo.png';
import SQLLogo from '../../assets/logos/SQL-logo.png';
import TSLogo from '../../assets/logos/ts-logo.png';



export function SkillsList() {
return (
  <section id="skill">
<Heading title="Skill" />
<div className="list">
<Skill logo={ReactLogo} title="React" description='React is an open-source JavaScript library for building user interfaces. It is widely used for creating interactive and dynamic web applications. React follows a component-based architecture, where the UI is divided into reusable components that can be composed to form complex user interfaces.' />
<Skill logo={JSLogo} title="JavaScript" description='
JavaScript is a high-level, interpreted programming language that is primarily used for developing interactive and dynamic web pages. It is a versatile language that can be used both on the client-side (in web browsers) and server-side (with the help of frameworks like Node.js).' />
<Skill logo={CSSLogo} title="CSS" description="CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation and visual appearance of HTML and XML documents. It provides a set of rules that define how elements should be displayed on a web page."/>
<Skill logo={Nodejs} title="Node JS" description="
Node.js is an open-source JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript code outside of a web browser, making it possible to build server-side applications using JavaScript." />
<Skill logo={SQLLogo} title="SQL" description="SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases. It provides a set of commands and syntax for creating, modifying, and querying databases." />
<Skill logo={TSLogo} title="TypeScript" description="TypeScript is an open-source programming language developed by Microsoft. It is a superset of JavaScript that introduces static typing and additional features to enhance the development experience and improve code quality."/>
</div>
  </section>
)
}