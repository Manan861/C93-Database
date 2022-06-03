import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import Spreadsheet from "react-spreadsheet";
import Logger from 'simple-console-logger';


const RangeView = ({ cell }) => (
  <input
    type="range"
    value={cell.value}
    disabled
    style={{ pointerEvents: "none" }}
  />
);

const RangeEdit = ({ cell, onChange }) => (
  <input
    type="range"
    onChange={(e) => {
      onChange({ ...cell, value: e.target.value });
      this.setState({
        className: value
      })
    }}
    value={cell.value || 0}
    autoFocus

  />
  
);


const data = [
  [{ value: "Time/Day" }, { value: "Monday" }, {value:"Tuesday"}, {value:"Wednesday"}, {value:"Thursday"}, {value:"Friday"}],
  [{ value: "9:00-9:45" },{ value: "",  DataEditor: RangeEdit }],
  [{value:  "9.45-10:30"},{ value: "",  DataEditor: RangeEdit }], 
  [{value:  "10:45-11:15"},{ value: "",  DataEditor: RangeEdit }],
  [{value:  "11:15-12:00"},{ value: "",  DataEditor: RangeEdit }],
  [{value:  "12:00-12:45"},{ value: "",  DataEditor: RangeEdit }],
  [{value:  "12:45-1:30"},{ value: "",  DataEditor: RangeEdit }],
  [{value: "2:15-3:00"},{ value: "",  DataEditor: RangeEdit }],
];

const MyComponent = () => <Spreadsheet data={data} />;
export default class scheduleScreen extends Component{
  constructor(){
    super()
    this.state={
      className:""
      
    }
    
  }
  render(){
    return(
      <View>
        <Text>
          
          Schedule Screen 
        </Text>
        <MyComponent></MyComponent>
        
      </View>
    )
  }
}
