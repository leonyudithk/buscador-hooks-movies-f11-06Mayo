import { movies } from "../../data/movies";

const getByName = (name='') => {
    console.log(name)
    name = name.toLocaleLowerCase()
    return movies.filter(movie => movie.name.toLocaleLowerCase().includes(name))

};

export default getByName;