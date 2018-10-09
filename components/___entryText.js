import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

class entryText extends Component {
    render() {
        return (
            <Text>{content}</Text>
        );
    }
}

entryText.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
export default entryText; 