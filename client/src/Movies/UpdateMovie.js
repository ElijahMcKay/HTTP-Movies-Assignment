import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import MovieList from './MovieList';

const UpdateMovie = (props) => {

    const [movie, setMovie] = useState({
        title: '', director: '', metascore: '', stars: [] 
    })

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/movies")
            .then(res => {
                setMovie(res.data)
                console.log(res); 
            })
            .catch(err => console.log(err.response));
        }, [])

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
                if (starIndex === index) {
                    return e.target.value; 
                } else {
                    return star; 
                }
            })
        })
    }

    console.log(movie); 
    // const fetchMovies = () => {
    //     axios
    //         .get("http://localhost:5000/api/movies")
    //         .then(res => {
    //             setMovie({ movies: res.data })
    //             console.log(movie); 
    //         })
    //         .catch(err => console.log(err.response));
    // }

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