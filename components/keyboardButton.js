import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Colors from '../constants/colors';

class KeyboardButton extends Component {
	render() {
		const { text, onPress } = this.props;
		return (
			<View style={styles.keyboardView}>
				<TouchableOpacity style={styles.keyboardTouch} onPress={() => onPress()} >
			    <Text style={styles.keyboardText}>{text}</Text>
		    </TouchableOpacity>		
			</View>
		);
	}
}

KeyboardButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	keyboardView: {
    borderWidth: 3,
    borderColor: 'transparent'
  },
	keyboardText: {
		fontSize:15,
		fontWeight: 'bold',
	  color:  Colors.keyboardButtonText,
	  textAlign: 'center'
  },
	keyboardTouch: {
    borderRadius:3,
		width: 35,
		height: 35,
		backgroundColor: Colors.keyboardButton,
    shadowColor: Colors.keyboardButtonShadow,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
		shadowOffset : { width: 1, height: 13 },
		justifyContent: 'center'
  }
});

export default KeyboardButton;