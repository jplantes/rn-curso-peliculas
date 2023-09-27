import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/Navigation'

import { useMovieDetails } from '../hooks/useMovieDetails'
import { MovieDetails } from '../components/MovieDetails'

const { height: heightScreen } = Dimensions.get('screen')

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route }: Props ) => {

  const movie = route.params
  const uriImg = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

  const { isLoading, cast, movieFull } = useMovieDetails( movie.id )

  return (
    <ScrollView>
      <View style={ styles.imgeContainer }>
        <Image
          source={{ uri: uriImg }}
          style={ styles.posterImage }
        />
      </View>

      <View style={ styles.marginContainer }>
        <Text style={ styles.subTitle }>{ movie.original_title }</Text>
        <Text style={ styles.title }>{ movie.title }</Text>
      </View>

      {
        isLoading
          ? <ActivityIndicator size={ 30 } color="grey" />
          : <MovieDetails movieFull={ movieFull! } cast={ cast } />
      }


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  posterImage: {
    flex: 1,
  },
  imgeContainer: {
    width: '100%',
    height: heightScreen * 0.7,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    overflow: 'hidden',
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  subTitle: {
    fontSize: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
})