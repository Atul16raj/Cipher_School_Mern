import logo from './logo.svg';
import './App.css';
import {Component} from "react";
class App extends Component{
  name ="Cipher School";
  render(){
    return(
      <>
      <div>
        <h1 style={{
          color:"red",
          textAlign:"center",
        }}>This is {this.name} </h1>
          
         </div>
         <div>
         <p>This is paragraph on{this.name}</p>   
         </div>
         </>
    );
  }
}

 

export default App;
