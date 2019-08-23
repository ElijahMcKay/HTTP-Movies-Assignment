import React, { useEffect, useState }  from 'react';
import axios from 'axios';

const UpdateMovie = (props) => {

    const [ movie, setMovie ] = useState()

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
        axios
            .put('http://localhost:5000', )
    }

    const handleChange = (e) => {
        e.preventDefault(); 
    }

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
                    // value={}
                    name="name"
                    />
                </label>
                <label>Director:
                    <input
                    onChange={handleChange}
                    type='text'
                    // value={}
                    name="director"
                    />
                </label>
                <label>Metascore:
                    <input 
                    onChange={handleChange}
                    type='text'
                    // value={}
                    name="metascore"
                    />
                </label>
                <label>Actors:
                    <input 
                    onChange={handleChange}
                    type='text'
                    // value={}
                    name="actors"
                    />
                </label>
                <button>Save Changes</button>
            </form>
        </>
     );
}
 
export default UpdateMovie;