import React, { useContext }  from 'react';
import axios from 'axios';
import { MovieContext } from './MovieCard'; 
const UpdateMovie = (props) => {

    const myData = useContext(MovieContext); 

    console.log(myData); 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios
            .put('http://localhost:5000', )
    }

    const handleChange = (e) => {
        e.preventDefault(); 
    }

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