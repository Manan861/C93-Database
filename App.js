import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import scheduleScreen from './screens/scheduleScreen';

export default function App() {
 
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }


var AppNavigator=createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  scheduleScreen: scheduleScreen
})

const AppContainer=createAppContainer(AppNavigator)