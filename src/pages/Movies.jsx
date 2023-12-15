import useHttp from 'hooks/useHttp'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { fetchMovieByQuery } from 'services/api'

const Movies = () => {
  const [value, setValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  
  const isFirstRender = useRef(true)
  const myRef = useRef(null)
  useEffect(() => {
    if (isFirstRender.current)
    { isFirstRender.current = false }
    myRef.current.focus()    
  }, [])
  
  
  
  const q = searchParams.get('query') || ''

  const [movies] = useHttp(fetchMovieByQuery, q)

  const location = useLocation()
  
  const handleSearchQuery = () => {
		setSearchParams(value ? { query: value } : {})
	}

  return (
    <div>
      <div>
				<input ref={myRef} value={value} onChange={e => setValue(e.target.value)} type='text' />
				<button onClick={handleSearchQuery}>Search</button>
			</div>
			<ul>
				{(movies?.length && q) ? movies?.map(movie => (
					<li key={movie.id}>
						<Link state={{ from: location }} to={movie.id.toString()}>
							<p>{movie.title}</p>
						</Link>
					</li>
				)) : ''}
			</ul>
    </div>
  )
}

export default Movies