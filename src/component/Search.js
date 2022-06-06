import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import querystring from 'query-string'
import getByName from './GetSelectors/getByName';
import PintarCardMovies from './PintarCardMovies';


const Search = () => {

    //devuelve una funcion que permite navegar mediante una programacion en este caso al formulario
    const navigate = useNavigate()
    // devuelve la locacion de la url actual que esta represntando , puede ser un componente
    const location = useLocation()

    const {q= '' }= querystring.parse(location.search)
    console.log(q)
    const [values, handleInputChange, reset] = useForm({
        search: q
    })

    const {search} = values

        // llamar a getByName para pasarle el nombre que capture a traves del input
        const filterNameMovies = getByName(search)
        console.log(filterNameMovies)

        

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`?q=${search}`)
        console.log('dentro del handleSubmit',search)
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
                {
                    filterNameMovies.map(movie=>(
                        <PintarCardMovies key={movie.id} {...movie}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Search;
