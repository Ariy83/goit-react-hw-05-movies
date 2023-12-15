import useHttp from 'components/hooks/useHttp'
import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieByCast } from 'services/api'
import avatar from '../../img/Avatar.png'

const Cast = () => {
  const { movieId } = useParams()
  const [cast] = useHttp(fetchMovieByCast, movieId)

  return (
    <ul>
      {cast?.map(item => <li key={item.cast_id}>
        {item.profile_path ? <img src={`https://image.tmdb.org/t/p/w200${item.profile_path}`} alt={item.name} width={100} />
          : <img src={avatar} alt={item.name} width={100} />
        }
        <p>{ item.name }</p>
        <p>Character: { item.character }</p>
      </li>)}
    </ul>
  )
}

export default Cast