import { Component } from "react";
import MoiveCard from "./Moviecard";


class MoiveList extends Component{

    render(){
        
        //const{title,plot,price,rating,stars,fav,isInCart} = this.state;
        const { movies, addStars, removeStars, toggleCart, toggleFav } = this.props;

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
                        key={movie.id} 
                        addStars={addStars} 
                        removeStars={removeStars}
                        handleFav={toggleFav}
                        handleCart={toggleCart}
                    />
                )
                )}
            </>
        )
    }
}

export default MoiveList;
