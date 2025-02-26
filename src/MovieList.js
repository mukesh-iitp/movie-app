import { Component } from "react";
import MoiveCard from "./Moviecard";

class MoiveList extends Component{

    render(){

        return (
            <>
                <MoiveCard/>
                <MoiveCard/>
                <MoiveCard/>
            </>
        )
    }
}

export default MoiveList;
