import React from 'react';
import useForm from '../hooks/useForm';

const Search = () => {

    const [values, handleInputChange, reset] = useForm({
        search: ''
    })

    const {search} = values
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(search)
        reset()
    }

    return (
        <div>
            <h1>Search Movies</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    autoComplete='search'
                    name='search'
                    onChange={handleInputChange}
                />
            </form>
            <div>
                <h1>Results</h1>
                <hr/>
            </div>
        </div>
    );
};

export default Search;
