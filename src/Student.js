import { Component } from "react";

class Student extends Component{

    render(){

        console.log(this.props);

        const {sname, marks} = this.props;

        return(
            <>
                {/* <h3>Hello, {this.props.sname}</h3>
                <h5>You have secured {this.props.marks} %</h5> */}
                <h3>Hello, {sname}</h3>
                <h5>You have secured {marks} %</h5>
                <hr/>
            </>
        )

    }

}

export default Student;