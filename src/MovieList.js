import { Component } from "react";
import MoiveCard from "./Moviecard";
import {movies} from "./moviesData";

class MoiveList extends Component{

    constructor(){
        super();
        this.state = {
            // title: "The Avengers",
            // plot: "The supernatural power shows",
            // price: 199,
            // rating: 8.9,
            // stars: 0,
            // fav: false,
            // cart: false

            movies : movies

        }
        // this.addStars = this.addStars.bind(this);
    }

    handleIncStar = (movie) =>{
        const{movies} = this.state;
        const movieId = movies.indexOf(movie);
        if(movies[movieId].star >=5)
            return;
        movies[movieId].star +=0.5;
        this.setState({
            //movies: movies
            movies  //alternative or shortcut or above line for same movies
        })
    }

    handleDecStar = (movie) =>{
        const{movies} = this.state;
        const movieId = movies.indexOf(movie);
        if(movies[movieId].star <=0)
            return;
        movies[movieId].star -=0.5;
        this.setState({
            //movies: movies
            movies  //alternative or shortcut or above line for same movies
        })
    }
    handleFav = (movie) =>{
        const{movies} = this.state;
        const movieId = movies.indexOf(movie);
        movies[movieId].fav = !movies[movieId].fav;
        this.setState({
            //movies: movies
            movies  //alternative or shortcut or above line for same movies
        })
    }
    handleCart = (movie) =>{
        const{movies} = this.state;
        const movieId = movies.indexOf(movie);
        movies[movieId].isInCart = !movies[movieId].isInCart;
        this.setState({
            //movies: movies
            movies  //alternative or shortcut or above line for same movies
        })
    }


    render(){
        
        //const{title,plot,price,rating,stars,fav,isInCart} = this.state;
        const { movies } = this.state;

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
            
                {//movies.map((movie, index) => (
                movies.map((movie) => (
                    <MoiveCard 
                        movies = {movie} 
                        //key={index} 
                        key={movie.id} 
                        addStars={this.handleIncStar} 
                        removeStars={this.handleDecStar}
                        handleFav={this.handleFav}
                        handleCart={this.handleCart}
                    />
                )
                )}
            </>
        )
    }
}

export default MoiveList;
