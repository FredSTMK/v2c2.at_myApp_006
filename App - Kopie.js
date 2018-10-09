import 
    React 
from 'react';
import { 
    StyleSheet,
    Button,  
    Text, 
    View,
    Alert,
    AppRegistry,
    Dimensions
} from 'react-native';
import { 
    Col, 
    Row, 
    Grid 
} from "react-native-easy-grid";

var { height } = Dimensions.get('window');
 
var box_count = 3;
var box_height = height / box_count;

export default class MainApp extends React.Component {

  _handlePress() {
    Alert.alert('on Press!');
  }

  render() {
    return (
      <View>
        <Grid>
          <Col style={styles.gray_box}></Col>
          <Col>
            <Row style={styles.orange_box}></Row>
            <Row style={styles.green_box}>
              <View>
                <Button onPress={this._handlePress} title="A" style={styles.keyboard_Button} accessibilityLabel="Tap on Me"/>
                <Button onPress={this._handlePress} title="B" style={styles.keyboard_Button} accessibilityLabel="Tap on Me"/>
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
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  //header
  box1: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
  //content
  box2: {
    flex: 10,
    backgroundColor: '#8BC34A'
  },
  //footer
  box3: {
    flex: .5,
    backgroundColor: '#e3aa1a'
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
  keyboard_Button: {
    backgroundColor: "rgba(92, 99, 216, 1)",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 5
  }
});

AppRegistry.registerComponent('MainApp', () => MainApp);
