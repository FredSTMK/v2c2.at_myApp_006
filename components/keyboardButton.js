import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

class keyboardButton extends Component {
	render() {
		const { text, onPress} = this.props;
		return (
			<View style={styles.viewStyle}>
				<TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()} >
			    <Text style={styles.textStyle}>{text}</Text>
		    </TouchableOpacity>		
			</View>
		);
	}
}

keyboardButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	viewStyle: {
    borderWidth: 3,
    borderColor: 'transparent',
  },
	
	textStyle: {
		fontSize:15,
		fontWeight: 'bold',
	  color: '#ffffff',
	  textAlign: 'center'
  },

	buttonStyle: {
    borderRadius:3,
    // paddingTop: 2,
    // paddingBottom: 2,
    // paddingLeft: 50,
    // paddingRight: 50,
		width: 35,
		height: 35,
		// backgroundColor: '#FFFFFF',
		backgroundColor: '#3498db',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
		shadowOffset : { width: 1, height: 13},
		justifyContent: 'center',
  },

	keyboardButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 10,
    borderColor: '#FFFFFF',
    width: 85,
    height: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
		}
	},
});

export default keyboardButton;