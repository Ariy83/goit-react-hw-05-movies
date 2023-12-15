import useHttp from 'hooks/useHttp';
import React from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieByReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams()
  const [reviews] = useHttp(fetchMovieByReviews, movieId)

  return (
    reviews?.length ?
      <ul>
        {reviews?.map(item =>
          <li key={item.id}>
            <h4>Author: {item.author}</h4>
            <p>{item.content}</p>
          </li>)}
      </ul>
      : <h4>Reviews not found</h4>
  )
}

export default Reviews