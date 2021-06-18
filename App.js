import React, {useState} from 'react';
import type {Node} from 'react';
import Header from './src/components/uikit/Header';
import {ScrollView, View,StyleSheet} from 'react-native';
import ImageCard from './src/components/ImageCard';

const App: () => Node = () => {
  let [title, setTitle] = useState('Hello world');
  let mass = [];
  for(let i = 0; i< 10; i++)
        mass.push(i);
  const {container} = styles;
  return (
      <View>
      <Header title={title} />
          <ScrollView>
          <View style={container}>
              {
                  mass.map(u=>{
                      return <ImageCard key = {u} Title={u} />
                  })

              }
          </View>
          </ScrollView>

      </View>
  );
};

const styles = StyleSheet.create({
    container : {
        marginTop:30,
        flexDirection:'row',
        flexWrap: "wrap",
        flexShrink: 2,
        justifyContent: 'space-around',
        marginBottom:150
    }
});

export default App;
