import MovieList from '../MovieList/MovieList'

export default function Movie(props) {
    // console.log(1,props)
    return ( <> {
       
        props
            .movies
            .map((movie) => {
                return (<> <MovieList movie={movie} /> </>
                )
            })
        }
        </>)

            }