import {useState} from "react";
const Movies = () => {
    const [isAdded, setIsAdded] = useState(false);
    const [movies, setMovies] = useState([
        {id:1, title: "Passengers", ratings: "10"},
        {id:2, title: "The Martian", ratings: "9"},
        {id:3, title: "Interstellar", ratings: "8"},
    ])
    const handleClick = () => {
        setMovies([...movies, {id:4,title: "Spiderman Far From Home", ratings: 9.5}]);
        setIsAdded(true);
   
    }
    const changeMovie = () => {
        setMovies(movies.map((movie) => (

            movie.id === 1 ?{...movies,
                title: "Avatar"}
                :
                movie
            )
        ))
    }
  return (
    <section>
        <h2>Movies : </h2>
        {
            movies.map((movie,index) => (
                <div key={index + 1}>
                <h3>{index + 1} Title : {movie.title}</h3>
                <b>{index + 1} Ratings : {movie.ratings}</b>
                </div>

            ))

        }
        <button onClick={handleClick} disabled={isAdded}>Add Movie</button>
        <button onClick={changeMovie}> Change First Movie </button>
    </section>
  )
}

export default Movies