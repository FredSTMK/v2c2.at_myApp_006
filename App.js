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
    this.valueList = ['Graz', 'Wien', 'München', 'Köln', 'Berlin', 'Mailand', 'Rom', 'Paris'];
    this.state = {
          key: 0,
          templateText: this.valueList[0],
          entryText: ''
        };
  }
  

  _onPress(key) {
    // Alert.alert('on Press! ' + key); 
    switch (key) {
      case 'clear':
        this.setState({entryText: ''});
        break;      
      case 'space':
        this.setState({entryText: this.state.entryText + '_'});
        break;     
      case 'enter':
        let areEqual = this.state.templateText.toUpperCase() === this.state.entryText.toUpperCase();
        if (areEqual) {
          ++this.state.key;
          this.setState({templateText: this.valueList[this.state.key]});
          this.setState({entryText: ''});
        }
        break;
      case 'back':
        let str = this.state.entryText;
        str = str.slice(0, -1);
        this.setState({entryText: str});
        break;      
      default:
        this.setState({entryText: this.state.entryText + key});
    }
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <Grid>
          <Col style={styles.grayBox}></Col>
          <Col>
              <Row style={styles.templateContainer}>
                <CustomText
                  buttonStyles={styles.buttonStyles}
                  textStyles={styles.templateText}
                  content={this.state.templateText}>
                </CustomText>   
              </Row>
              <Row style={styles.entryContainer}>
                <CustomText
                  buttonStyles={styles.buttonStyles}
                  textStyles={styles.entryText}
                  content={this.state.entryText}>
                </CustomText>                  
              </Row> 
            <Row style={styles.keyboardContainer}>
                <Row style={styles.keyboardRow}>
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
                  <KeyboardCommand commandType="back"  	onPress={() => {this._onPress("back");}}	/>
                </Row>
                <Row style={styles.keyboardRow}>              
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
                <Row style={styles.keyboardRow}>
                  <KeyboardButton text="Y"	onPress={() => {this._onPress("Y");}}	/>
                  <KeyboardButton text="X"	onPress={() => {this._onPress("X");}}	/>
                  <KeyboardButton text="C"	onPress={() => {this._onPress("C");}}	/>
                  <KeyboardButton text="V"	onPress={() => {this._onPress("V");}}	/>
                  <KeyboardButton text="B"	onPress={() => {this._onPress("B");}}	/>
                  <KeyboardButton text="N"	onPress={() => {this._onPress("N");}}	/>
                  <KeyboardButton text="M"	onPress={() => {this._onPress("M");}}	/>
                </Row>                
                <Row style={styles.keyboardRow}>
                  <KeyboardCommand commandType="clear"	onPress={() => {this._onPress("clear");}}	/>
                  <KeyboardCommand commandType="space"	onPress={() => {this._onPress("space");}}	/>
                  <KeyboardCommand commandType="enter"	onPress={() => {this._onPress("enter");}}	/>
                </Row>
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },

  grayBox: {
    width: 150,
    backgroundColor: 'gray'
  },
  
  templateContainer: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'lightgray',
    borderRadius: 0,
    justifyContent: 'center',
    padding: 5,
  },

  templateText: {
    justifyContent: 'flex-end',
    padding: 10, 
    fontSize: 42,
    backgroundColor: 'lightgray'
  },

  entryContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },

  entryText: {
    justifyContent: 'flex-end',
    padding: 10, 
    fontSize: 52,
    backgroundColor: 'white'
  },

  keyboardContainer: {
    flex: 1,
    backgroundColor: '#2E9298',
    flexDirection: 'column',
    padding: 4,
    // borderRadius: 0,
    // padding: 0,
    // justifyContent: 'center',
  },  
  keyboardRow: {
    // flex: 1,
    // backgroundColor: '#2E9200',
    // backgroundColor: '#2E9200',
    flexDirection: 'row',
    borderRadius: 0,
    justifyContent: 'center',
    padding: 2,
    // alignItems: 'stretch'
  },
  buttonStyles: {},
  textStyles: {},

})

AppRegistry.registerComponent('MainApp', () => MainApp);