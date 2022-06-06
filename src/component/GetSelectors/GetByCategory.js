import { movies } from "../../data/movies";


const getByCategory = (category) => {

  const validarCategory = ['senior', 'hobbit']

    if(!validarCategory.includes(category)){
            throw new Error (`La categoria ${category} no Existe`)
    }

  return movies.filter(movie => movie.category === category)

};

export default getByCategory;