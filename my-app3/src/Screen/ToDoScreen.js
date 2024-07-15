import {Component} from "react";

class ToDoScreen extends Component{
    render(){
        return(
            <div className="Screen">
            
           <h1 className="ui heading center">To DO List</h1>
        
          <div>
            <button className-="ui secondary button">Add Task</button>
          </div>
           </div>
        );
    }
}
export default ToDoScreen;