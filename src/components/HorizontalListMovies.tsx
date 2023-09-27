import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { MoviePoster } from './MoviePoster'

import { Movie } from '../interfaces/movieInterface'

interface Props {
  movies: Movie[];
  title?: string;
}

export const HorizontalListMovies = ( { movies, title }: Props) => {
    return (
    <View style={{ height: 260 }}>
    <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 5 }} >{ title }</Text>
    <FlatList
      data={ movies }
      renderItem={ ({ item }: any) =>(
        <MoviePoster movie={ item } width={ 140 } height={ 200 } /> 
      )}
      keyExtractor={ (item) => item.id.toString() }
      horizontal={ true }
      showsHorizontalScrollIndicator={ false }
    />
  </View>
  )
}
