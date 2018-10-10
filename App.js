import React from 'react';
import { 
  StyleSheet, View, Button, Alert, AppRegistry, Text, TextInput 
} from 'react-native';
import { 
  Col, Row, Grid 
} from "react-native-easy-grid";
import KeyboardButton  from './components/keyboardButton';
import KeyboardCommand from './components/keyboardCommand';
import CustomText from './components/customText';

export default class MainApp extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onPress(key) {
    // Alert.alert('on Press! ' + key); 
    switch (key) {
      case 'clear':
        this.setState({text: ''});
        break;      
      case 'space':
        this.setState({text: this.state.text + '_'});
        break;     
      case 'enter':
        this.setState({text: ''});
        break;
      case 'back':
        let str = this.state.text;
        str = str.slice(0, -1);
        this.setState({text: str});
        break;      
      default:
        this.setState({text: this.state.text + key});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col style={styles.gray_box}></Col>
          <Col>
            <Row style={styles.orange_box}>
              <Col style={styles.textContainer}>
                <Row style={styles.keyboard_line}>
                  <CustomText
                    buttonStyles={styles.buttonStyles}
                    textStyles={styles.textView}
                    content={this.state.text}>
                  </CustomText>   
                </Row>             
              </Col>
            </Row>
            <Row style={styles.green_box}>
              <Col style={styles.keyboard_box}>
                <Row style={styles.keyboard_line}>
                  <KeyboardButton text="Q"	onPress={() => {this._onPress("Q");}}	/>
                  <KeyboardButton text="W"	onPress={() => {this._onPress("W");}}	/>
                  <KeyboardButton text="E"	onPress={() => {this._onPress("E");}}	/>
                  <KeyboardButton text="R"	onPress={() => {this._onPress("R");}}	/>
                  <KeyboardButton text="T"	onPress={() => {this._onPress("T");}}	/>
                  <KeyboardButton text="Z"	onPress={() => {this._onPress("Z");}}	/>
                  <KeyboardButton text="U"	onPress={() => {this._onPress("U");}}	/>
                  <KeyboardButton text="I"	onPress={() => {this._onPress("I");}}	/>
                  <KeyboardButton text="O"	onPress={() => {this._onPress("O");}}	/>
                  <KeyboardButton text="P"	onPress={() => {this._onPress("P");}}	/>
                  <KeyboardButton text="Ü"	onPress={() => {this._onPress("Ü");}}	/>
                </Row>
                <Row style={styles.keyboard_line}>              
                  <KeyboardButton text="A"	onPress={() => {this._onPress("A");}}	/>
                  <KeyboardButton text="S"	onPress={() => {this._onPress("S");}}	/>
                  <KeyboardButton text="D"	onPress={() => {this._onPress("D");}}	/>
                  <KeyboardButton text="F"	onPress={() => {this._onPress("F");}}	/>
                  <KeyboardButton text="G"	onPress={() => {this._onPress("G");}}	/>
                  <KeyboardButton text="H"	onPress={() => {this._onPress("H");}}	/>
                  <KeyboardButton text="J"	onPress={() => {this._onPress("J");}}	/>
                  <KeyboardButton text="K"	onPress={() => {this._onPress("K");}}	/>
                  <KeyboardButton text="L"	onPress={() => {this._onPress("L");}}	/>
                  <KeyboardButton text="Ö"	onPress={() => {this._onPress("Ö");}}	/>
                  <KeyboardButton text="Ä"	onPress={() => {this._onPress("Ä");}}	/>
                </Row>                
                <Row style={styles.keyboard_line}>
                  <KeyboardButton text="Y"	onPress={() => {this._onPress("Y");}}	/>
                  <KeyboardButton text="X"	onPress={() => {this._onPress("X");}}	/>
                  <KeyboardButton text="C"	onPress={() => {this._onPress("C");}}	/>
                  <KeyboardButton text="V"	onPress={() => {this._onPress("V");}}	/>
                  <KeyboardButton text="B"	onPress={() => {this._onPress("B");}}	/>
                  <KeyboardButton text="N"	onPress={() => {this._onPress("N");}}	/>
                  <KeyboardButton text="M"	onPress={() => {this._onPress("M");}}	/>
                  <KeyboardCommand commandType="back"  	onPress={() => {this._onPress("back");}}	/>
                </Row>                
                <Row style={styles.keyboard_line}>
                  <KeyboardCommand commandType="clear"	onPress={() => {this._onPress("clear");}}	/>
                  <KeyboardCommand commandType="space"	onPress={() => {this._onPress("space");}}	/>
                  <KeyboardCommand commandType="enter"	onPress={() => {this._onPress("enter");}}	/>
                </Row>
              </Col>
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  orange_box: {
    flex: 1,
    height: 100,
    backgroundColor: 'orange',
    alignItems: 'stretch'
  },
  green_box: {
    backgroundColor: 'green'
  },
  gray_box: {
    width: 150,
    backgroundColor: 'gray'
  },
  
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },

  textView: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10, 
    fontSize: 42,
    backgroundColor: 'white'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  keyboard_box: {
    flex: 1,
    backgroundColor: '#2E9298',
    flexDirection: 'column',
    // borderRadius: 0,
    // padding: 0,
    // justifyContent: 'center',
  },  
  keyboard_line: {
    flex: 1,
    // backgroundColor: '#2E9200',
    // backgroundColor: '#2E9200',
    flexDirection: 'row',
    borderRadius: 0,
    justifyContent: 'center',
    padding: 5,
    // alignItems: 'stretch'
  },
  buttonStyles: {},
  textStyles: {},

})

AppRegistry.registerComponent('MainApp', () => MainApp);