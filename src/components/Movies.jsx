const Movies = () => {
    const [movies, setMovies] = useState([
        {title: "Passengers", ratings: "10"},
        {title: "The Martian", ratings: "9"},
        {title: "Interstellar", ratings: "8"},
    ])
    const handleClick = () => {
        setMovies(...movies, {title: "Spiderman Far From Home", ratings: 9.5});
        
   
    }
  return (
    <section>
        <h2>Movies : </h2>
        <h3>Title : {movies.title}</h3>
        <b>Ratings : {movies.ratings}</b>
        <button onClick={handleClick}>Add Movie</button>
    </section>
  )
}

export default Movies