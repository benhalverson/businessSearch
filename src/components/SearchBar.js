import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
const SearchBar = () => {
	return (
		<View style={styles.backgroundStyle}>
      <MaterialIcons name="search" style={styles.iconStyle} />
			<TextInput style={styles.inputStyle} placeholder="Search"/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
    marginTop: 15,
		backgroundColor: '#ccc',
		height: 50,
		borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
