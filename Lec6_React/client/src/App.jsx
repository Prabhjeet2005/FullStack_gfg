import { useState } from 'react';
import ClassComponent from './ClassComponent';
import logo from './logo.svg';
import FunctionalComponent from './FunctionalComponent';


function App() {
  const [name, setName] = useState("Prabhjeet")
  const [displayComponent, setdisplayComponent] = useState(true)
  setTimeout(()=>{setName("Nikhil")},5*1000)
  const user = {
    name:"Nikhil",
    userId:101
  }
  return (<>
    {/* {displayComponent && <ClassComponent name={name} user={user} />} */}
    <FunctionalComponent name={name} user={user} />
  </>

  );
}

export default App;
