import {useEffect, useState} from 'react';
import Movie from '../Movie/Movie'
export default function Home() {

    const [movies,
        setMovies] = useState([])
    async function getMovie() {

        let url = "https://moviesappsaleh.herokuapp.com/trending";
        let response = await fetch(url)
        console.log(1, response);
        let movieData = await response.json();
        console.log(2, movieData);
        setMovies(movieData)
        console.log(3, movies)
    }

    useEffect(() => {
        getMovie();
    }, [])

    return ( <> <h1>home</h1> < Movie movies = {
        movies
    } /> </>)
}
