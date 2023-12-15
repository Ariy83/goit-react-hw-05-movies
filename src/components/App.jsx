import HomePage  from "pages/HomePage"
import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Movies from "pages/Movies"
import MovieDetails from "pages/MovieDetails"
import NotFound from "pages/NotFound"
import Cast from "./Cast/Cast"
import Reviews from "./Reviews/Reviews"

export const App = () => {
	
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/movies/:movieId" element={<MovieDetails />} >
						<Route path="/movies/:movieId/cast" element={<Cast />} />
						<Route path="/movies/:movieId/reviews" element={<Reviews />} />
					</Route>
				</Route>
				
				<Route path='*' element={<NotFound />} />
				
			</Routes>
		</>
	)
}
