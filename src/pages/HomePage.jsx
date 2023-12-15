import React, { useCallback, useEffect, useState } from "react"
import { Report } from "notiflix";
import { fetchMovies } from "services/api";
import { Loader } from "components/Loader/Loader";
import HomeMovies from "components/HomeMovies/HomeMovies";

const HomePage = () => {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const getMovies = useCallback(async () => {
		try {
			setLoading(true)
			setError(null)
			const results = await fetchMovies()
			setMovies([...results])
			console.log(results);
		} catch (error) {
			setError(error.message)
			Report.failure(error.message)
		} finally {
			setLoading(false)
		}
	}, [])
	
	useEffect(() => {
		getMovies()
	}, [getMovies])

	
	return (
		<div>
			<h1>Trending today</h1>
			<HomeMovies movies={movies} />
			
			{!error && !loading && !movies.length && <h1>Your query is not available</h1>}
			
			{error && <h1>Server is dead, try again later</h1>}
				
			{loading && !movies.length && (
				<Loader />
			)}
			
		</div>
	)
}

export default HomePage