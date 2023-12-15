import { Loader } from 'components/Loader/Loader'
import useHttp from 'components/hooks/useHttp'
import React, { Suspense, useRef } from 'react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchMovieById } from 'services/api'
import styled from 'styled-components'

const MovieDetails = () => {
  const { movieId } = useParams()

  const [movie] = useHttp(fetchMovieById, movieId)

  const location = useLocation()
  
  const goBackRef = useRef(location.state?.from || '/')
  const navigate = useNavigate()

  const handleGoBack = () => {
		navigate(goBackRef.current)
	}

	if (!movie) {
		return <Loader />
	}
  
  const { poster_path, title, vote_average, overview, genres, release_date } = movie
  const releaseYear = release_date.slice(0, 4)
  const genresString = genres?.map((item, i) => <p key={i}>{item.name}</p> )
  
  return (
    <div>
      <button onClick={handleGoBack}> Go back</button>
      <br />
      <StyledWrap>
{/* '../img/poster.jpg' */}
      <StyledImg src={poster_path} alt={title} width={300} height={400} />
      <StyledFlex>
        <h2>{title} ({releaseYear})</h2>
        <p>User Score (Vote Average): {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <StyledWrapMini>{genresString}</StyledWrapMini>
        </StyledFlex>
        </StyledWrap>
      <hr />
      
      <p>Additional information</p>
      <ul>
        <li><Link to='/movies/:movieId/cast' id={movieId}>Cast</Link></li>
        <li><Link to='/movies/:movieId/reviews'>Reviews</Link></li>
      </ul>
						
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
    </div>
  )
}

export default MovieDetails

const StyledImg = styled.img`
  display: block;
  background-color: lightgoldenrodyellow
`

const StyledFlex = styled.div`
display: flex;
flex-direction: column;
margin: 0;
padding: 0;
`
const StyledWrap = styled.div`
display: flex; 
gap: 20px;
`
const StyledWrapMini = styled.div`
display: flex; 
gap: 5px;
`