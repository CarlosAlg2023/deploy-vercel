import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <h1>Hola mundo desde react</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);