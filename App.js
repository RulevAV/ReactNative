import React,{useState} from 'react';
import type {Node} from 'react';
import {
  Text,
  View, StyleSheet,
} from 'react-native';



const App: () => Node = () => {
  let [title,setTitle] = useState("Hello world");
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30defe',
    height: 116,
    justifyContent: 'center',
    paddingLeft: 22,
    paddingTop: 71,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
  },
});

export default App;
