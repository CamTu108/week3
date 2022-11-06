import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import MySection from "./MySection";
import MyButton from "./MyButton";

const array = ["First", "Second", "Thrid"];

const object = {
  first : 1,
  second : 2,
  third : 3
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Ex 0
  // <p> 
  //   Hello, <strong> JSX</strong>
  // </p>
  // Ex 0.1
  // <div>
  //   <button />
  //   <code />
  //   <input />
  //   <label />
  //   <p />
  //   <pre />
  //   <select />
  //   <table />
  //   <ul />
  //   </div>
//   Ex 0.2
//   <section>
//   <header>
//     <hl>A Header</hl>
//   </header>
//   <nav>
//     <a href="item">Nav Item</a>
//   </nav>
//   <main>
//     <p>The main content...</p>
//   </main>
//   <footer>
//     <small>&copy; 2021</small>
//   </footer>
// </section> 
// Ex 0.3
// <MySection>
//   <MyButton> My Button Text </MyButton>
// </MySection>
// Ex 0.4
// <section>
//     <h1>Array</h1>
//     <ul>
//       {array.map((i) => (
//         <li key ={i}>{i}</li>
//       ))}
//     </ul>

//   <h1>Object</h1>
//   <ul>
//     {Object.keys(object).map((i) => (
//     <li key ={i}>
//       <strong>{i}:</strong>
//       {object[i]}
//       </li>
//     ))}
//   </ul>

//   </section>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
