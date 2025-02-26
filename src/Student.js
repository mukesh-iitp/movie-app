import { Component } from "react";

class Student extends Component{

    render(){

        console.log(this.props);
        return(
            <>
                <h3>Hello, {this.props.sname}</h3>
                <h5>You have secured {this.props.marks} %</h5>
                <hr/>
            </>
        )

    }

}

export default Student;