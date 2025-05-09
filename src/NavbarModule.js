import React from "react";
//import styled from "styled-components";
import styles from './Navbar.module.css';

class NavbarModule extends React.Component{

    render(){

        return(
            <>
            {/* <div style={styles.nav}> */}
            {/* <Nav> */}
                {/* <div style={styles.title}> */}
                {/* <Title>Movie-App</Title> */}
                {/* <CartIconContainer> */}
                    {/* <CartImg alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/> */}
                    {/* <CartCount>3</CartCount> */}
                    {/* <CartCount color="yellow" show={true}>5</CartCount> */}
                {/* </CartIconContainer> */}
            {/* </Nav> */}

            <div className={styles.nav}>
                <div className={styles.title}>Movie-App</div>
                <div className={styles.cartIconContainer}>
                    <img
                        className={styles.cartIcon}
                        alt="Cart Icon"
                        src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                    />
                    <span className={styles.cartCount}>2</span>
                </div>
            </div>
            </>

        )

    }

}

// const styles = {

//     cartIcon: {
//         height: 40,
//         marginRight: 20,
//         marginTop: "5px",
//     },

//     nav: {
//         // width:"100%", 
//         // height:50, 
//         // background:"red", 
//         // display:"flex",
//         // justifyContent: "space-between",
//         height: 70,
//         background: "#4267b2",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItem: "center",
//         position: "relative"
//     },

//     title: {
//         fontsize: 30,
//         color: "#fff",
//         fontWeight: 600,
//         fontFamily: '"Montserrat", sans-serif',
//         textTransform: "uppercase",
//         marginLeft: 20,
//         marginTop: "15px"

//     },

//     cartIconContainer: {
//         position: "relative",
//         cursor: "pointer",
//     },

//     cartCount: {
//         background: "orange",
//         borderRadius: "50%",
//         padding: "4px 8px",
//         position: "absolute",
//         right: 10,
//         top: -5,
//         fontSize: 12,
//     }
// };

export default NavbarModule;