import { Component } from "react";
import MoiveCard from "./Moviecard";

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

            movies : [
                { id:1,
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  star: 0,
                  fav: false,
                  isInCart: false                  
                },
                { id:2,
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  star: 0,            
                  fav: false,
                  isInCart: false                  
                },
                { id:3,
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  star: 0,            
                  fav: false,
                  isInCart: false                  
                }]

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
