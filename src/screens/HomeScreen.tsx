import React from 'react'
import { View, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'

import { MoviePoster } from '../components/MoviePoster'

import { useMovies } from '../hooks/useMovies'
import { HorizontalListMovies } from '../components/HorizontalListMovies'

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
  const { top } = useSafeAreaInsets()

  if( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={ 100 }/>
      </View>
    )
  }
  
  return (
    <ScrollView>
      <View style={{ marginTop: top + 10 }}>
        {/* Carrusel principal */}
        <View style={{ height: 440 }}>
          <Carousel
            data={ nowPlaying! }
            renderItem={ ({ item }: any) =>  <MoviePoster movie={ item } /> }
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
          />
        </View>

        {/* Peliculas populares */}
        <HorizontalListMovies movies={ popular! } title='Pelicuals Populares'/>
        <HorizontalListMovies movies={ topRated! } title='Pelicuals Mejor Puntuadas'/>
        <HorizontalListMovies movies={ upcoming! } title='Pelicuals por estrenarce'/>

      </View>
    </ScrollView>
  )
}
