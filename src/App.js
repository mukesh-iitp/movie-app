import React from "react";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";
import MoiveList from "./MovieList";
import Navbar from "./NavbarModule";
//import Student from "./Student";
import {movies} from "./moviesData";

class App extends React.Component{

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

        movies : movies,
        cartCount: 0

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

    const {movies} = this.state;

    return(
      <>
        <Navbar/>
        <MoiveList 
          movies={movies}
          key={movies.id} 
          addStars={this.handleIncStar} 
          removeStars={this.handleDecStar}
          toggleFav={this.handleFav}
          toggleCart={this.handleCart}
        />
      </>
    )

  }

}

// function App() {
//   return (
//     <>
//     <Navbar/>
//     <MoiveList/>


//     {/* <h1>Students Data</h1>
//     <Student sname="Alexa" marks="80"/>
//     <Student sname="Siri" marks="90"/>
//     <Student sname="Google" marks="88"/>
//     <Student/> */}
    
    
//     {/* <HeadingOne/>
//     <HeadingTwo/> */}
    
//     </>
//   );
// }

// Student.defaultProps= {
//   sname : "Student",
//   marks : "N.A."
// }

export default App;