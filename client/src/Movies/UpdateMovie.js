import React from 'react';

const UpdateMovie = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault(); 
    }

    const handleChange = (e) => {
        e.preventDefault(); 
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleChange}
                type='text'
                // value={}
                name="name"
                />
                <input 
                onChange={handleChange}
                type='text'
                // value={}
                name="director"
                />
                <input 
                onChange={handleChange}
                type='text'
                // value={}
                name="metascore"
                />
                <input 
                onChange={handleChange}
                type='text'
                // value={}
                name="actors"
                />
            </form>
        </>
     );
}
 
export default UpdateMovie;