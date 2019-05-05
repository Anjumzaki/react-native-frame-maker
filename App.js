/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Image, StyleSheet, Text, View} from 'react-native';
import Gest from './Gest';
import Gest1 from './Gest1';

import photo from './assets/frame.png'




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

       
    <View style={this.gest}><Gest style={styles.gest}/></View>

    <Image
    source={photo}
    style={{
      width: 200,
      height: 300,
    }}
  />

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  photo: {
    width:'100%',
    height:100,
    position:'absolute',
    top:0,
    left:0,
    marginTop:100
  },
  gest:{
  }
});
