//import React from "react";
import { Component } from "react";


//class MoiveCard extends React.Component{
class MoiveCard extends Component{

    constructor(){
        super();
        this.state = {
            title: "The Avengers",
            plot: "The supernatural power shows",
            price: 199,
            rating: 8.9
        }
        // this.addStars = this.addStars.bind(this);
    }

    // addStars(){
    //     console.log("this.state: ", this.state);
    // }

    addStars = () => {
        console.log("this.state: ", this.state);
    }

    render(){

        const{title,plot,price,rating} = this.state;

        return (
            <div className="main">
                <div className="movie-card">
                    
                    <div className="left">
                        <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'></img>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" className="str-btn"/>
                                <img alt="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>
                                <img alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/32/32563.png" 
                                    //onClick={this.addStars.bind(this)} 
                                    onClick={this.addStars}
                                    className="str-btn"/>
                                <span>0</span>
                            </div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MoiveCard;