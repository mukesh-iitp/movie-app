import { Component } from "react";
import MoiveCard from "./Moviecard";

class MoiveList extends Component{

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

    render(){
        const{title,plot,price,rating,stars,fav,cart} = this.state;

        return (
            <>
                {/* <MoiveCard 
                    title={title}
                    plot={plot}
                    price={price}
                    rating={rating}
                    stars={stars}
                    fav={fav}
                    cart={cart}
                /> */}

                <MoiveCard movies = {this.state}/>
            </>
        )
    }
}

export default MoiveList;
