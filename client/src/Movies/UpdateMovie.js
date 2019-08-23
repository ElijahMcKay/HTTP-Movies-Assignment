import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import MovieList from './MovieList';

const UpdateMovie = (props) => {

    const [movie, setMovie] = useState({
        title: '', director: '', metascore: '', stars: [] 
    })

    useEffect(() => {
            fetchMovies(props.match.params.id); 
        }, [props.match.params.id])

    const handleSubmit = (e) => {
        e.preventDefault(); 
        // axios
        //     .put('http://localhost:5000', )
    }

    const handleChange = (e) => {
        setMovie({...movie, [e.target.name]: e.target.value}); 
    }

    const handleStar = index => e => {
        setMovie(
            {...movie, 
            stars: movie.stars.map((star, starIndex) => {
                return starIndex === index ? e.target.value : star
            })
        })
        
    }

    console.log(movie); 
    const fetchMovies = (id) => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res => {
                setMovie(res.datad)
                console.log(movie); 
            })
            .catch(err => console.log(err.response));
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <label>Title:
                    <input 
                    onChange={handleChange}
                    type='text'
                    value={movie.title}
                    name="title"
                    />
                </label>
                <label>Director:
                    <input
                    onChange={handleChange}
                    type='text'
                    placeholder="Title"
                    value={movie.director}
                    name="director"
                    />
                </label>
                <label>Metascore:
                    <input 
                    onChange={handleChange}
                    type='text'
                    placeholder="Metascore"
                    value={movie.metascore}
                    name="metascore"
                    />
                </label>
                {/* <label>Actors: */}
                {movie.stars.map((star, index) => {
                    return  <input 
                            onChange={handleStar(index)}
                            type='text'
                            placeholder="star"
                            value={star}
                            name="star"
                />
                })}
                {/* </label> */}
                <button>Save Changes</button>
            </form>
        </>
     );
}
 
export default UpdateMovie;