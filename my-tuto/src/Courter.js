import {Component} from "react";

class Courter extends Component {
    //delare a state object to see live update on the UI
    state = {
    count : 0
    }
    increment = () => {
        // Use the setState 
        this.setState ({
           count: this.state.count + 1
        });
        console.log(this.state.count);
    }

    
render() {
   return (
       <>
       <div>Result: {this.state.count}</div>
       <button onClick={this.increment}>+</button>
       </>
   );
}


}

export default Courter;