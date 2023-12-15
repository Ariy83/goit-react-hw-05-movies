import { Loader } from 'components/Loader/Loader'
import useHttp from 'hooks/useHttp'
import React, { Suspense, useRef } from 'react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchMovieById } from 'services/api'
import styled from 'styled-components'
import img from '../img/poster.jpg'

const MovieDetails = () => {
  const { movieId } = useParams()

  const [movie] = useHttp(fetchMovieById, movieId)

  const location = useLocation()
  const navigate = useNavigate()
  const goBackRef = useRef(location.state?.from || '/')
  
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
      <StyledBtn onClick={handleGoBack}> Go back</StyledBtn>
      <br />
      <StyledWrap>
        {poster_path ? <StyledImg src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
          : <StyledImg src={img} alt={title} />
        }
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
        <li><Link to='cast' id={movieId}>Cast</Link></li>
        <li><Link to='reviews'>Reviews</Link></li>

			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
      </ul>
						
    </div>
  )
}

const StyledBtn =styled.button`
  margin-bottom: 8px;
`

const StyledImg = styled.img`
  display: block;
  height: auto;
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
export default MovieDetails