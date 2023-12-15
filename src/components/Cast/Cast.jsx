import useHttp from 'components/hooks/useHttp'
import React from 'react'
import { fetchMovieByCast } from 'services/api'

const Cast = ({id}) => {
    console.log(id);

    // const [cast] = useHttp(fetchMovieByCast, id)
    // console.log(cast);

  return (
    <div>Cast</div>
  )
}

export default Cast