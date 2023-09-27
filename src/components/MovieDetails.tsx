import React from 'react'
import { View, Text } from 'react-native'
import { MovieDetailsResponse } from '../interfaces/detailsInterface'
import { Cast } from '../interfaces/actoresInterface';

import { Star } from 'iconoir-react-native'

interface Props {
  movieFull: MovieDetailsResponse;
  cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>

        <View style={{ flexDirection: 'row' }}>
          <Star color="grey" height={18} width={18}/>
          <Text> { movieFull.vote_average }</Text>

          <Text>
            - { movieFull.genres.map( g => g.name ).join(', ') }
          </Text>

        </View>

        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: '900', color: 'black' }}>
          Historia
        </Text>
        <Text style={{ fontSize: 18, marginVertical: 10, fontWeight: '400', color: 'black' }}>
          { movieFull.overview }
        </Text>

      </View>
    </>
  )
}
