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
            rating: 8.9,
            stars: 0,
            fav: false,
            cart: false
        }
        // this.addStars = this.addStars.bind(this);
    }

    // addStars(){
    //     console.log("this.state: ", this.state);
    // }

    addStars = () => {
        if(this.state.stars>=5)
            return;
        //this.state.stars += .5;
        
        //form1: setState()
        /*this.setState(
            {
                stars: this.state.stars +=0.5
            }
        )
        this.setState(
            {
                stars: this.state.stars +=1.0
            }
        )
        this.setState(
            {
                stars: this.state.stars +=1.5
            }
        )
        this.setState(
            {
                stars: this.state.stars +=0.5
            }
        )
        //only the las one setState will be called and rerenderd
        */

        //form2: setStates()
        this.setState((prevState) => {
            return{
                stars: prevState.stars+0.5
            }
        }
        );
        this.setState((prevState) => {
            return{
                stars: prevState.stars+0.5
            }
        }
        );
        this.setState((prevState) => {
            return{
                stars: prevState.stars+0.5
            }
        }//, () => console.log("Stars inside callback:", this.state.stars)
        );
        //rerendering happeing only once but addition is calling previous state so all .5 is added three times
        console.log("this.state: ", this.state);
    }

    removeStars = () => {
        if(this.state.stars <=0)
            return;
        this.setState((prevState) => {
            return{
                stars: prevState.stars-0.5
            }
        },() => console.log("Stars inside callback:", this.state.stars));
        console.log("this.state: ", this.state);
    }

    handleFav = () =>{
        this.setState({fav:!this.state.fav});
    }

    handleCart = () =>{
        this.setState({cart:!this.state.cart})
    }

    render(){

        const{title,plot,price,rating,stars,fav,cart} = this.state;

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
                                <img alt="decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/43/43625.png" 
                                    className="str-btn"
                                    onClick={this.removeStars}
                                    />
                                <img alt="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>
                                <img alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/32/32563.png" 
                                    //onClick={this.addStars.bind(this)} 
                                    onClick={this.addStars}
                                    className="str-btn"/>
                                <span>{stars}</span>
                            </div>

                            {/* {fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button>:
                                <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={this.handleFav}>
                                {fav?"Un-Favourite":"Favourite"}</button>
                            
                            <button className={cart?"remove-btn":"cart-btn"} onClick={this.handleCart}>
                                {cart?"Remove from cart":"Add to cart"}</button>
                            
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MoiveCard;