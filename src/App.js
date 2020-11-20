
import './App.css';

import Students from './Students';

function App() {
  return (
    <div className='App'>
     <Students Rollno="200"   Name="Ali Raza"  Age="40"/>
     <Students Rollno="201"   Name="qasim"  Age="50"/>
     <Students Rollno="300"   Name="zahid"  Age="30"/>

    </div>
  );
}

export default App;
