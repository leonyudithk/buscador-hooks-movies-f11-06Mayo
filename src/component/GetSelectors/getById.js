import { movies } from "../../data/movies";


const getById = (id) => {
    return movies.filter(movie => movie.id === id)
};

export default getById;