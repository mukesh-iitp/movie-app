import React from "react";
import styled from "styled-components";

const Nav = styled.div`
    width: 100%;
    height: 70px;
    background: #4267b2;
    display: flex;
    justify-content: space-between;
    align-item: center;
    position: relative;
`;

const Title = styled.div`
    fontsize: 30;
    color: #fff;
    font-weight: 600;
    font-family: montserrat, sans-serif;
    text-transform: uppercase;
    margin-left: 20;
    margin-top: 15px;
`;

const CartIconContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const CartCount = styled.span`
    background: orange;
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 20px;
    top: -5;
    font-size: 12px;
`;

const CartIcon = styled.img`
    height: 40px;
    margin-right: 20px;
    margin-top: 5px;
`;

class Navbar extends React.Component{

    render(){

        return(
            <>
            {/* <div className="nav"> */}
            {/* <div style={styles.nav}> */}
            <Nav>
                {/* <div style={styles.title}> */}
                <Title>Movie-App</Title>
                {/* </div> */}
                <CartIconContainer>
                    <CartIcon alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                    <CartCount>0</CartCount>
                </CartIconContainer>
            {/* </div> */}
            </Nav>
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