// 1 import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 2 get a refrance to the div with id root
const el = document.getElementById('root');
//  3 tell react to take control of that element
const root = ReactDOM.createRoot(el);
// 4 creat a componant
// function App() { 
//     return <p> hi doaa </p>
//  }
//  show that compnant on the screen
root.render(<App />);


