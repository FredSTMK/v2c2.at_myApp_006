import React from 'react'; 
import { 
  StyleSheet, View, Button, Alert, AppRegistry, Text, TextInput 
} from 'react-native'; 
import { 
  Col, Row, Grid 
} from "react-native-easy-grid"; 
import KeyboardButton  from './components/KeyboardButton';
import CommandButton from './components/CommandButton';
import CustomText from './components/CustomText';
import Colors from './constants/colors';

export default class MainApp extends React.Component {
  
  constructor(props) {
    super(props);
    this.dateObject = new Date();
    this.valueKey = 0;
    this.valueList = ['Graz', 'Wien', 'München', 'Köln', 'Berlin', 'Mailand', 'Rom', 'Paris'];
    this.timeStart = this.dateObject.getTime();
    this.timeNext = this.dateObject.getTime();
    this.textTemplate = this.valueList[0];
    this.textEntry = '';
    this.textState = '';
    this.textDebug = '';
    this.state = {
          timeButtonPress: '',
          timeCommit: '',
    };
  }

  onPress(key) {
    switch (key) {
      case 'clear':
        this.textEntry = '';
        this.setState({timeButtonPress: this.dateObject.getTime()})
        break;
      case 'space':
        this.textEntry = this.textEntry + '_';
        this.setState({timeButtonPress: this.dateObject.getTime()})
        break;
      case 'enter':
        let areEqual = this.textTemplate.toUpperCase() === this.textEntry.toUpperCase();
        if (areEqual) {
          let _last = this.timeNext;
          let _now = new Date().getTime();
          let _duration = _now - _last;
          // console.log('        _now ' + _now);
          // console.log('       _last ' + _last);
          // console.log('   _duration ' + _duration);
          this.debugTextClear();
          this.debugTextAdd('Template: ' + this.valueList[this.valueKey]);
          this.debugTextAdd('------------------------------');
          this.debugTextAdd('Start: ' + _last);
          this.debugTextAdd('End: ' + + _now );
          this.debugTextAdd('-----------------------------');
          this.debugTextAdd('Duration: '  + _duration + ' [ms]');
          this.timeNext = _now;
          ++this.valueKey;
          this.textTemplate = this.valueList[this.valueKey];
          this.textEntry =    '';
            //
          this.setState({timeButtonPress: this.dateObject.getTime()})
        }
        break;
      case 'back':
        let str = this.textEntry;
        str = str.slice(0, -1);
        this.textEntry = str;
        this.setState({timeButtonPress: this.dateObject.getTime()})
        break; 
      case 'start':
        this.textStateUpdate();
        break;
      case 'pause':
        break;       
      case 'continue':
        break; 
      case 'stop':
        break; 
      default:
        this.textEntry = this.textEntry + key;
        this.setState({timeCommit: this.dateObject.getTime()});
    }
  }
  // todo debugTextAdd
  debugTextAdd(str) {
    _str = this.textDebug;
    __str = _str + "\n" + str;
    this.textDebug =  __str;
    // console.log(' ... done :' + _str + ' + ' + str + ' -> ' + __str);
    // return this.textDebug;
  }
  debugTextClear() {
    this.textDebug = '';
    // return this.textDebug;
  }
  textStateUpdate() {
    this.textState = "session start:   " + this.state.timeStart + "\n" +
                              "  last duration: " + this.state.timeDuration +  "\n" +
                              "  loop start:    " + this.state.timeNext +  "\n" +
                              " ..." ;
    return this.textState;
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <Grid>
          <Col style={styles.grayBox}>
            <Text numberOfLines={5} style={styles.stateText}>
              {this.textState}
            </Text>
            <Text numberOfLines={7} style={styles.stateText}>
              {this.textDebug}
            </Text>            
            <CommandButton commandType="start"	  onPress={() => {this.onPress("start");}}	/>
            <CommandButton commandType="pause"    onPress={() => {this.onPress("pause");}}	/>
            <CommandButton commandType="continue" onPress={() => {this.onPress("continue");}}/>
            <CommandButton commandType="stop"  	  onPress={() => {this.onPress("stop");}}	/>
          </Col>
          <Col>
              <Row style={styles.templateContainer}>
                <CustomText
                  buttonStyles={styles.buttonStyles}
                  textStyles={styles.templateText}
                  content={this.textTemplate}>
                </CustomText>   
              </Row>
              <Row style={styles.entryContainer}>
                <CustomText
                  buttonStyles={styles.buttonStyles}
                  textStyles={styles.entryText}
                  content={this.textEntry}>
                </CustomText>                  
              </Row> 
            <Row style={styles.keyboardContainer}>
                <Row style={styles.keyboardRow}>
                  <KeyboardButton text="Q"	onPress={() => {this.onPress("Q");}}	/>
                  <KeyboardButton text="W"	onPress={() => {this.onPress("W");}}	/>
                  <KeyboardButton text="E"	onPress={() => {this.onPress("E");}}	/>
                  <KeyboardButton text="R"	onPress={() => {this.onPress("R");}}	/>
                  <KeyboardButton text="T"	onPress={() => {this.onPress("T");}}	/>
                  <KeyboardButton text="Z"	onPress={() => {this.onPress("Z");}}	/>
                  <KeyboardButton text="U"	onPress={() => {this.onPress("U");}}	/>
                  <KeyboardButton text="I"	onPress={() => {this.onPress("I");}}	/>
                  <KeyboardButton text="O"	onPress={() => {this.onPress("O");}}	/>
                  <KeyboardButton text="P"	onPress={() => {this.onPress("P");}}	/>
                  <KeyboardButton text="Ü"	onPress={() => {this.onPress("Ü");}}	/>
                  <CommandButton commandType="back"  	onPress={() => {this.onPress("back");}}	/>
                </Row>
                <Row style={styles.keyboardRow}>              
                  <KeyboardButton text="A"	onPress={() => {this.onPress("A");}}	/>
                  <KeyboardButton text="S"	onPress={() => {this.onPress("S");}}	/>
                  <KeyboardButton text="D"	onPress={() => {this.onPress("D");}}	/>
                  <KeyboardButton text="F"	onPress={() => {this.onPress("F");}}	/>
                  <KeyboardButton text="G"	onPress={() => {this.onPress("G");}}	/>
                  <KeyboardButton text="H"	onPress={() => {this.onPress("H");}}	/>
                  <KeyboardButton text="J"	onPress={() => {this.onPress("J");}}	/>
                  <KeyboardButton text="K"	onPress={() => {this.onPress("K");}}	/>
                  <KeyboardButton text="L"	onPress={() => {this.onPress("L");}}	/>
                  <KeyboardButton text="Ö"	onPress={() => {this.onPress("Ö");}}	/>
                  <KeyboardButton text="Ä"	onPress={() => {this.onPress("Ä");}}	/>
                </Row>                
                <Row style={styles.keyboardRow}>
                  <KeyboardButton text="Y"	onPress={() => {this.onPress("Y");}}	/>
                  <KeyboardButton text="X"	onPress={() => {this.onPress("X");}}	/>
                  <KeyboardButton text="C"	onPress={() => {this.onPress("C");}}	/>
                  <KeyboardButton text="V"	onPress={() => {this.onPress("V");}}	/>
                  <KeyboardButton text="B"	onPress={() => {this.onPress("B");}}	/>
                  <KeyboardButton text="N"	onPress={() => {this.onPress("N");}}	/>
                  <KeyboardButton text="M"	onPress={() => {this.onPress("M");}}	/>
                </Row>                
                <Row style={styles.keyboardRow}>
                  <CommandButton commandType="clear"	onPress={() => {this.onPress("clear");}}	/>
                  <CommandButton commandType="space"	onPress={() => {this.onPress("space");}}	/>
                  <CommandButton commandType="enter"	onPress={() => {this.onPress("enter");}}	/>
                </Row>
            </Row>
          </Col>
        </Grid>
      </View>
    );
    // this.textStateUpdate();
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  grayBox: {
    width: 150,
    backgroundColor: Colors.gray
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
    width: 150,
    backgroundColor: Colors.gray,
    justifyContent: 'flex-end',
  },
  templateContainer: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: Colors.lightgray,
    borderRadius: 0,
    justifyContent: 'center',
    padding: 5,
  },
  templateText: {
    justifyContent: 'flex-end',
    padding: 10, 
    fontSize: 42,
    backgroundColor: Colors.lightgray
  },
  entryContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  entryText: {
    justifyContent: 'flex-end',
    padding: 10, 
    fontSize: 52,
    backgroundColor: Colors.white
  },
  stateText: {
    height: 90,
    fontFamily: 'Cochin',
    fontSize: 10,
  },
  keyboardContainer: {
    flex: 1,
    backgroundColor: Colors.steelblue,
    flexDirection: 'column',
    padding: 4,
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