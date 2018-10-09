import React from 'react';
import { 
  StyleSheet, View, Button, Alert, AppRegistry 
} from 'react-native';
import { 
  Col, Row, Grid 
} from "react-native-easy-grid";

export default class MainApp extends React.Component {

_onPress() {
  Alert.alert('on Press!');
 }

  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col style={styles.gray_box}></Col>
          <Col>
            <Row style={styles.orange_box}></Row>
            <Row style={styles.green_box}>
              <View style={styles.buttonContainer}>
                <Button onPress={this._onPress} title="Hello 1" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
                <Button onPress={this._onPress} title="Hello 1a" style={{color: "#FFFFFF"}} />
                <Button onPress={this._onPress} title="Hello 1b" style={styles.button_01} />
                <Button onPress={this._onPress} title="Hello 2" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
                <Button onPress={this._onPress} title="A" style={styles.button_01} accessibilityLabel="Tap on Me"/>
                <Button onPress={this._onPress} title="B" style={styles.button_01} accessibilityLabel="Tap on Me"/>
              </View>
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  button_01: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 10,
    borderColor: '#FFFFFF'
  },
  orange_box: {
    height: 150,
    backgroundColor: 'orange'
  },
  green_box: {
    backgroundColor: 'green'
  },
  gray_box: {
    width: 150,
    backgroundColor: 'gray'
  },
})

AppRegistry.registerComponent('MainApp', () => MainApp);