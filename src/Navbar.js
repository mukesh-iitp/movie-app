import React from "react";

class Navbar extends React.Component{

    render(){

        return(
            <>
            {/* <div className="nav"> */}
            <div style={styles.nav}>
                <div style={styles.title}>
                    Movie-App
                </div>
                <div style={styles.cartIconContainer}>
                    <img alt="Cart Icon" style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                    <span style={styles.cartCount}>0</span>
                </div>
            </div>
            </>

        )

    }

}

const styles = {

    cartIcon: {
        height: 40,
        marginRight: 20,
        marginTop: "5px",
    },

    nav: {
        // width:"100%", 
        // height:50, 
        // background:"red", 
        // display:"flex",
        // justifyContent: "space-between",
        height: 70,
        background: "#4267b2",
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        position: "relative"
    },

    title: {
        fontsize: 30,
        color: "#fff",
        fontWeight: 600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "uppercase",
        marginLeft: 20,
        marginTop: "15px"

    },

    cartIconContainer: {
        position: "relative",
        cursor: "pointer",
    },

    cartCount: {
        background: "orange",
        borderRadius: "50%",
        padding: "4px 8px",
        position: "absolute",
        right: 10,
        top: -5,
        fontSize: 12,
    }
};

export default Navbar;