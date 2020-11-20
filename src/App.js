import React from 'react';
import './App.css';
import Students from './student.js';

function App() {
  return (
    <div className='App'>
    <Students StudentRollno='10'/>
    <Students StudentName='Syed ali Raza Zaidi'/>
    <Students StudentAge='40'/>
    </div>
  );
}

export default App;
