import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

class CustomText extends Component {

  render() {
      const { textStyles, buttonStyles, content } = this.props;
      return (
        <TouchableOpacity style={buttonStyles}>
          <Text style={textStyles}>{content}</Text>
        </TouchableOpacity>
      );
  }

}

CustomText.propTypes = {
  content: PropTypes.string.isRequired,
  textStyles: PropTypes.oneOfType([
                PropTypes.array,
                PropTypes.number,
                PropTypes.shape({}),
            ]).isRequired,
  buttonStyles: PropTypes.oneOfType([
                PropTypes.array,
                PropTypes.number,
                PropTypes.shape({}),
            ]).isRequired,
};

const styles = StyleSheet.create({
	viewStyle: {
    borderWidth: 3,
    borderColor: 'transparent',
  },
});

export default CustomText;