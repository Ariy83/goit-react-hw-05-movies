import React, { lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./Layout"

const HomePage = lazy(() => import("pages/HomePage"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
	
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="movies" element={<Movies />} />
					<Route path="movies/:movieId" element={<MovieDetails />} >
						<Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
				</Route>
				
				<Route path='*' element={<Navigate to='/' />} />
				
			</Routes>
		</>
	)
}
