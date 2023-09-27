import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { useNavigation } from '@react-navigation/core';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

export const MoviePoster = ({ movie, width=300, height=420 }: Props) => {

  const uriImg = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={ () => navigation.navigate('DetailScreen', movie) }
      activeOpacity={0.8}
      style={{ width, height, marginHorizontal: 8 }}
    >
      <View style={ style.imageConteiner }>
        <Image
          source={{ uri: uriImg }}
          style={ style.image }
        />
      </View>
    </TouchableOpacity>
  )
}


const style = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 20,
  },
  imageConteiner: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 20,

    elevation: 50,
  },
})