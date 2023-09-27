import React, { useState, useEffect } from 'react'

import movieDB from '../api/movieDB';

import { MovieDetailsResponse } from '../interfaces/detailsInterface';
import { Cast, CreditsResponse } from '../interfaces/actoresInterface';


interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieDetailsResponse;
  cast: Cast[];
}


export const useMovieDetails = ( movieID: number ) => {
  
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  })

  const getMovieDetails = async () => {
    const MovieDetailsPromise = movieDB.get<MovieDetailsResponse>(`/${ movieID }`)
    const castPromise = movieDB.get<CreditsResponse>(`/${ movieID }/credits`)

    const [movieDetailsRes, castResp] = await Promise.all([
      MovieDetailsPromise,
      castPromise
    ])

    setState({
      isLoading: false,
      movieFull: movieDetailsRes.data,
      cast: castResp.data.cast
    })
  }
  
  useEffect(() => {
   getMovieDetails()
  }, [])
  
  
  return {
    ...state
  }
}
