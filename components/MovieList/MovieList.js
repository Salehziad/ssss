import Card from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie"
export default function MovieList(props) {

const[show,setShow]=useState(false);
const[chosenMovie,setChosenMovie]=useState();
const handleClose=()=> setShow(false);
const handleShow = (movie) => {
    setChosenMovie(movie);
    setShow(true);

}
    return ( <> <Card style={{
        width: '18rem'
    }}>
         <Card.Img width='100%' variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}/>
        <Card.Body>
            <Card.Title>
                {props.movie.title}
            </Card.Title>
            <Card.Text>
                {props.movie.release_date}
            </Card.Text>
            <Card.Text>
                {props.movie.overview}
            </Card.Text>
            <Button  variant="primary">Button #1</Button>
        </Card.Body>
    </Card>
    {
        chosenMovie && <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie}/>
    }
    </>
    )
}