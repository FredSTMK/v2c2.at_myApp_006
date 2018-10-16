import React from 'react';
import { 
  StyleSheet, View, Button, Alert, AppRegistry, Text, TextInput 
} from 'react-native';
import { 
  Col, Row, Grid 
} from "react-native-easy-grid";
import Timestamp from 'react-timestamp';
import KeyboardButton  from './components/keyboardButton';
import CommandButton from './components/commandButton';
import CustomText from './components/customText';

export default class MainApp extends React.Component {
  
  constructor(props) {
    super(props);
    this.dateObject = new Date();
    this.valueKey =     0;
    this.valueList =    ['Graz', 'Wien', 'München', 'Köln', 'Berlin', 'Mailand', 'Rom', 'Paris'];
    this.timeStart =    this.dateObject.getTime();
    this.timeNext =     this.dateObject.getTime();
    this.textTemplate = this.valueList[0];
    this.textEntry =    '';
    this.textState =    '';
    this.textDebug =    '';
    this.state = {
          //templateText: this.valueList[0],
          //entryText:    '',
          //stateText:    '',
          //debugText:    '',
          //timeStart:    this.dateObject.getTime(),
          //timeNext:     this.dateObject.getTime(),
          timeButtonPress:  '',
          timeCommit:       '',
        };
    
  }


  _onPress(key) {
    // Alert.alert('on Press! -1- ' + key); 
    // console.log('on Press! -1- ' + key); 
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
            //
            // let _date = new Date();
          let _last = this.timeNext;
          let _now = new Date().getTime();
          let _duration = _now - _last;
            //
          console.log('        _now ' + _now);
          console.log('       _last ' + _last);
          console.log('   _duration ' + _duration);
            //
            //
          this._debugText_clear();
          this._debugText_add('Template: ' + this.valueList[this.valueKey]);
          this._debugText_add('------------------------------');
          this._debugText_add('Start: ' + _last);
          this._debugText_add('End: ' + + _now );
          this._debugText_add('-----------------------------');
          this._debugText_add('Duration: '  + _duration + ' [ms]');
            // this._debugText_add(" - 1 - ");
            // this.setState({timeNext: _now});
            // this.setState({timeDuration: _duration}, () => { 
            // open file, go to line and save line
            // POST to web service
            // console.log(_duration);
            // });
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
        this._textState_update();
        break;
      case 'pause':
        //this.setState({stateText: ''});
        //this._textState_update();
        break;       
      case 'continue':
        //this.setState({stateText: ''});
        //this._textState_update();
        break; 
      case 'stop':
        //this.setState({stateText: ''});
        //this._textState_update();
        break; 

                

      default:
        // console.log('on Press! -2- ' + this.textEntry);  
        // console.log('on Press! -3- ' + key);  
        this.textEntry = this.textEntry + key;
        // console.log('on Press! -4- ' + this.textEntry);
        this.setState({timeCommit: this.dateObject.getTime()});
    }
  }

  // _onPress__textState_update = new Promise(
  //    function(this._debugText_add, reject) {
  //      if (let _date = new Date();)

  //    }
  //  )

  //_onPress__Enter() {
  //  // let _date = new Date();
  //  let _last = this.state.timeNext;
  //  let _now = _date.getTime();
  //  let _duration = _now - _last;
  //  this._debugText_clear();
  //  this.setState({timeNext: _now});
  //  this.setState({timeDuration: _duration});
  //  this._debugText_add(_newString = _now + " - " + _last + " = " + _duration);
  //  this._debugText_add(result + "\n - 1 - ");
  //  this._textState_update();
  //  return this.state.debugText;
  //}

  _debugText_add(str) {
    _str = this.textDebug;
    __str = _str + "\n" + str;
    // Alert.alert('_debugText_add: ' + this.state.debugText + " - " + str); 
    this.textDebug =  __str;
    // console.log(' ... done :' + _str + ' + ' + str + ' -> ' + __str);
    // return this.textDebug;
  }
  _debugText_clear() {
    this.textDebug = '';
    // return this.textDebug;
  }
  _textState_update() {
      // this.setState({stateText: ''});
    this.textState = "session start:   " + this.state.timeStart + "\n" +
                              "  last duration: " + this.state.timeDuration +  "\n" +
                              "  loop start:    " + this.state.timeNext +  "\n" +
                              " ..." ;
    return this.textState;
  }

  render() {
    //this.setState({stateText: "start: " + new Date.getTime(),
    //this.setState({timeStart: this.dateObject.getTime(),
    //this.setState({timeNext: new Date.getTime(),


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
            <CommandButton commandType="start"	  onPress={() => {this._onPress("start");}}	/>
            <CommandButton commandType="pause"    onPress={() => {this._onPress("pause");}}	/>
            <CommandButton commandType="continue" onPress={() => {this._onPress("continue");}}/>
            <CommandButton commandType="stop"  	  onPress={() => {this._onPress("stop");}}	/>
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
                  <CommandButton commandType="back"  	onPress={() => {this._onPress("back");}}	/>
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
                  <CommandButton commandType="clear"	onPress={() => {this._onPress("clear");}}	/>
                  <CommandButton commandType="space"	onPress={() => {this._onPress("space");}}	/>
                  <CommandButton commandType="enter"	onPress={() => {this._onPress("enter");}}	/>
                </Row>
            </Row>
          </Col>
        </Grid>
      </View>
    );
    // this._textState_update();
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
  
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
    width: 150,
    backgroundColor: 'gray',
    justifyContent: 'flex-end',
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

  stateText: {
    height: 90,
    fontFamily: 'Cochin',
    fontSize: 10,
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