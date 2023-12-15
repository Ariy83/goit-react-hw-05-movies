import React from "react"
import { fetchMovies } from "services/api";
import HomeMovies from "components/HomeMovies/HomeMovies";
import useHttp from "components/hooks/useHttp";

const HomePage = () => {

	const [movies] = useHttp(fetchMovies)
	
	return (
		<div>
			<h1>Trending today</h1>
			<HomeMovies movies={movies} />			 
		</div>
	)
}

export default HomePage