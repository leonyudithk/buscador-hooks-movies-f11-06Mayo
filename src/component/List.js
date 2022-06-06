import React from 'react';
import GetByCategory from './GetSelectors/GetByCategory';
import PintarCardMovies from './PintarCardMovies';

const List = ({category}) => {
    
    const movies = GetByCategory(category)
    console.log(movies)
    return (
        <div>
            {
                movies.map(movie=>(
                    <PintarCardMovies key={movie.id} {...movie}/>
                            
                ))
            }
        </div>
    );
};

export default List;