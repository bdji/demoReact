import logo from './logo.svg';
import './App.css';
import User from "./User";
import Courter from './Courter';

function App() {
  //Declare the variable
  const text = "Hello World";
  return (
    <div className="App">
     <p>{text}</p>
     <p>{6+6}</p>
     <User username = "yo" tweet = "what a nice day"/>
     <User username = "yo" tweet = "what a nice day"/>
     <User username = "yo" tweet = "what a nice day"/>
     <User username = "yo" tweet = "what a nice day"/>
     <Courter />
    </div>
  );
}

export default App;
