import useHttp from 'components/hooks/useHttp'
import React, { useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { fetchMovieByQuery } from 'services/api'

const Movies = () => {
  const [value, setValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  
  const q = searchParams.get('query')

	const [movies] = useHttp(fetchMovieByQuery, q)

  const location = useLocation()
  
  const handleSearchQuery = () => {
		setSearchParams(value ? { query: value } : {})
	}

  return (
    <div>
      <div>
				<input value={value} onChange={e => setValue(e.target.value)} type='text' />
				<button onClick={handleSearchQuery}>Search</button>
			</div>
			<ul>
				{q ? movies?.map(movie => (
					<li key={movie.id}>
						<Link state={{ from: location }} to={movie.id.toString()}>
							<p>{movie.title}</p>
						</Link>
					</li>
				)) : null}
			</ul>
    </div>
  )
}

export default Movies