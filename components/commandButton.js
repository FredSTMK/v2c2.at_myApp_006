import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

class commandButton extends Component {
    constructor() {
        super();
        this.commandType = {}
     }
    
    render() {
        const { text, commandType, onPress} = this.props;
        
        switch (commandType) {
            case 'clear':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonClear} onPress={() => onPress()} >
                            <Text style={styles.textStyle}>clear</Text>
                        </TouchableOpacity>		
                    </View>
                );
            case 'space':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonSpace} onPress={() => onPress()} >
                            <Text style={styles.textStyle}> </Text>
                        </TouchableOpacity>		
                    </View>
                );            
            case 'back':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonBack} onPress={() => onPress()} >
                            <Text style={styles.textStyle}>back</Text>
                        </TouchableOpacity>		
                    </View>
                );            
            case 'enter':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonEnter} onPress={() => onPress()} >
                            <Text style={styles.textStyle}>enter</Text>
                        </TouchableOpacity>		
                    </View>
                );
            case 'start':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonStartStop} onPress={() => onPress()} >
                            <Text style={styles.textStyle}>start</Text>
                        </TouchableOpacity>		
                    </View>
                );
            case 'pause':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonStartStop} onPress={() => onPress()} >
                            <Text style={styles.textStyle}>pause</Text>
                        </TouchableOpacity>		
                    </View>
                );
            case 'continue':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonStartStop} onPress={() => onPress()} >
                            <Text style={styles.textStyle}>continue</Text>
                        </TouchableOpacity>		
                    </View>
                );
            case 'stop':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonStartStop} onPress={() => onPress()} >
                            <Text style={styles.textStyle}>stop</Text>
                        </TouchableOpacity>		
                    </View>
                );            
            default:
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonDefault} onPress={() => onPress()} >
                            <Text style={styles.textStyle}>undef</Text>
                        </TouchableOpacity>		
                    </View>
                );
        }
	}
}

commandButton.propTypes = {
    text: PropTypes.string,
    commandType: PropTypes.string.isRequired,
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

  buttonDefault: {
    borderRadius:3,
    // paddingTop: 2,
    // paddingBottom: 2,
    // paddingLeft: 50,
    // paddingRight: 50,
    width: 50,
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

  buttonClear: {
    borderRadius:3,
    // paddingTop: 2,
    // paddingBottom: 2,
    // paddingLeft: 50,
    // paddingRight: 50,
    width:  70,
    height: 35,
    // backgroundColor: '#FFFFFF',
    backgroundColor: '#1f618d',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    justifyContent: 'center',
  },

  buttonSpace: {
    borderRadius:3,
    // paddingTop: 2,
    // paddingBottom: 2,
    // paddingLeft: 50,
    // paddingRight: 50,
    width: 180,
    height: 35,
    // backgroundColor: '#FFFFFF',
    backgroundColor: '#1f618d',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    justifyContent: 'center',
  },

  buttonBack: {
    borderRadius:3,
    // paddingTop: 2,
    // paddingBottom: 2,
    // paddingLeft: 20,
    // paddingRight: 50,
    width: 60,
    height: 35,
    // backgroundColor: '#FFFFFF',
    backgroundColor: '#1f618d',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    justifyContent: 'center',
  },

  buttonEnter: {
    borderRadius:3,
    // paddingTop: 2,
    // paddingBottom: 2,
    // paddingLeft: 50,
    // paddingRight: 50,
		width: 70,
		height: 35,
		// backgroundColor: '#FFFFFF',
		backgroundColor: '#1f618d',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    justifyContent: 'center',
  },

  buttonStartStop: {
    borderRadius:3,
    // paddingTop: 2,
    // paddingBottom: 2,
    // paddingLeft: 50,
    // paddingRight: 50,
		width: 120,
		height: 35,
		// backgroundColor: '#FFFFFF',
		backgroundColor: '#1f618d',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    justifyContent: 'center',
  },
});

export default commandButton;