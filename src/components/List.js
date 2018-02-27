import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

	const shows_first = [
		{
			key: 1,
			name: 'Red Sparrow',
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_SY1000_CR0,0,674,1000_AL_.jpg'
		},
		{
			key: 2,
			name: 'Death Wish',
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjU3MjE0MF5BMl5BanBnXkFtZTgwNTIyNDk0NDM@._V1_.jpg'
		},
		{
			key: 3,
			name: 'Foxtrot',
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYjkxY2ZkM2UtYmRmOS00MWYzLTg4NjktY2MzZjU0MjU0YTc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,677,1000_AL_.jpg'
		}
	]

	const shows_second = [
		{
			key: 1,
			name: 'They Remain',
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0NTEzMTk1OV5BMl5BanBnXkFtZTgwNTMwNDY3NDM@._V1_SY1000_CR0,0,699,1000_AL_.jpg'
		},
		{
			key: 2,
			name: 'Death Wish',
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ4NDkwMzM4OF5BMl5BanBnXkFtZTgwNzE3MzI3NDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
		},
		{
			key: 3,
			name: 'Submission',
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZmJkZjVhNGUtOTg4MC00YzAwLTg4ZjEtZjAxYmVlNTlkOTgyXkEyXkFqcGdeQXVyNTQwMDA5NTg@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
		},
		{
			key: 4,
			name: 'Red Sparrow',
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_SY1000_CR0,0,674,1000_AL_.jpg'
		},
		{
			key: 5,
			name: 'Death Wish',
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjU3MjE0MF5BMl5BanBnXkFtZTgwNTIyNDk0NDM@._V1_.jpg'
		},
		{
			key: 6,
			name: 'Foxtrot',
			image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYjkxY2ZkM2UtYmRmOS00MWYzLTg4NjktY2MzZjU0MjU0YTc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,677,1000_AL_.jpg'
		}
	]

export default class List extends Component {

	_renderItem(item) {
		return (
			<Image style={styles.imageStyle} source={{uri: item.image}} />
		)
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<View style={styles.container}>
					<Text style={styles.text}>My List</Text>
					<FlatList 
						horizontal
						SeparatorComponent = {() => <View style={styles.separatorComponent}/>}
						renderItem = {({item}) => this._renderItem(item)} 
						data = {shows_first}>
					</FlatList>
				</View>				

				<View style={styles.container}>
					<Text style={styles.text}>Recently uploaded</Text>
					<FlatList 
						horizontal
						SeparatorComponent = {() => <View style={styles.separatorComponent}/>}
						renderItem = {({item}) => this._renderItem(item)} 
						data = {shows_second}>
					</FlatList>
				</View>	
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
  	color: 'white'
  },
  imageStyle: {
  	width: 120,
  	height: 180
  },
  separatorComponent: {
  	width: 5 
  },
});