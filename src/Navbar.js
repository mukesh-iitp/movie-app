import React from "react";
import styled from "styled-components";

const Nav =  styled.div`
    height: 70px;
	background: linear-gradient(170deg, #1bc059, #0d47a1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
  
`;

const Title = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
    margin-left: 20px ;
    &:hover{color:#f00};

`;


const CartImg = styled.img`
    height: 48px;
    margin-right: 20px;
`;

const CartIconContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const CartCount = styled.div`
    background: ${props => props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
    visibility: ${props => (props.show? "visible": "hidden")};
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
                    <CartImg alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                    <CartCount color="yellow" show={true}>5</CartCount>
                </CartIconContainer>
            {/* </div> */}
            </Nav>
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

export default Navbar;