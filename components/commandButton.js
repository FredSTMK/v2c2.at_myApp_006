import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Colors from '../constants/colors';

class CommandButton extends Component {    
    render() {
        const { commandType, onPress} = this.props;
        
        switch (commandType) {
            case 'clear':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonClear} onPress={() => onPress()} >
                            <Text style={styles.commandButtonText}>clear</Text>
                        </TouchableOpacity>		
                    </View>
                );
            case 'space':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonSpace} onPress={() => onPress()} >
                            <Text style={styles.commandButtonText}> </Text>
                        </TouchableOpacity>		
                    </View>
                );            
            case 'back':
                return (
                    // TODO: make this seprate component, pass props for content and reuse it
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonBack} onPress={() => onPress()} >
                            <Text style={styles.commandButtonText}>back</Text>
                        </TouchableOpacity>		
                    </View>
                );            
            case 'enter':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonEnter} onPress={() => onPress()} >
                            <Text style={styles.commandButtonText}>enter</Text>
                        </TouchableOpacity>		
                    </View>
                );
            case 'start':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonStartStop} onPress={() => onPress()} >
                            <Text style={styles.commandButtonText}>start</Text>
                        </TouchableOpacity>		
                    </View>
                );
            case 'pause':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonStartStop} onPress={() => onPress()} >
                            <Text style={styles.commandButtonText}>pause</Text>
                        </TouchableOpacity>		
                    </View>
                );
            case 'continue':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonStartStop} onPress={() => onPress()} >
                            <Text style={styles.commandButtonText}>continue</Text>
                        </TouchableOpacity>		
                    </View>
                );
            case 'stop':
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonStartStop} onPress={() => onPress()} >
                            <Text style={styles.commandButtonText}>stop</Text>
                        </TouchableOpacity>		
                    </View>
                );            
            default:
                return (
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.buttonDefault} onPress={() => onPress()} >
                            <Text style={styles.commandButtonText}>undef</Text>
                        </TouchableOpacity>		
                    </View>
                );
        }
	}
}

CommandButton.propTypes = {
    text: PropTypes.string,
    commandType: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'transparent',
  },
  commandButtonText: {
	fontSize:15,
	fontWeight: 'bold',
	color: Colors.commandButtonText, // TODO
	textAlign: 'center'
  },
  buttonDefault: {
    borderRadius:3,
    width: 50,
    height: 35,
    backgroundColor: Colors.keyboardButton, // TODO
    shadowColor: Colors.commanButtonShadow, // TODO
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
	shadowOffset : { width: 1, height: 13 },
	justifyContent: 'center', // TODO
  },
  buttonClear: {
    borderRadius:3,
    width:  70,
    height: 35,
    backgroundColor: Colors.commandButton, // TODO
    shadowColor: Colors.commanButtonShadow, // TODO
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    justifyContent: 'center', // TODO
  },
  buttonSpace: {
    borderRadius:3,
    width: 180,
    height: 35,
    backgroundColor: Colors.commandButton,
    shadowColor: Colors.commanButtonShadow, // TODO
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    justifyContent: 'center', // TODO
  },

  buttonBack: {
    borderRadius:3,
    width: 60,
    height: 35,
    backgroundColor: Colors.commandButton, // TODO
    shadowColor: Colors.commanButtonShadow,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    justifyContent: 'center',
  },

  buttonEnter: {
    borderRadius:3,
	width: 70,
	height: 35,
	backgroundColor: Colors.commandButton, // TODO
    shadowColor: Colors.commanButtonShadow,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    justifyContent: 'center', // TODO
  },

  buttonStartStop: {
    borderRadius:3,
	width: 120,
	height: 35,
	backgroundColor: Colors.commandButton, // TODO
    shadowColor: Colors.commanButtonShadow,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13 },
    justifyContent: 'center', // TODO
  },
});

export default CommandButton;