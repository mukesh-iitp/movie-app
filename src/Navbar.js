import React from "react";

class Navbar extends React.Component{

    render(){

        return(
            <>
            {/* <div className="nav"> */}
            <div style={styles.nav}>
                <div className="title">
                    Movie-App
                </div>
                <div>
                    <img alt="Cart Icon"/>
                    <span>0</span>
                </div>
            </div>
            </>

        )

    }

}

export default Navbar;

const styles = {
    nav: {
        width:"100%", 
        height:70, 
        background:"cadetblue", 
        display:"flex",
        justifyContent: "space-between" 
    }

}