import React, {useState} from 'react';
import type {Node} from 'react';
import Header from './src/components/uikit/Header';
import {View} from 'react-native';
import ImageCard from './src/components/ImageCard';

const App: () => Node = () => {
  let [title, setTitle] = useState('Hello world');
  return (
      <View>
      <Header title={title} />
        <ImageCard/>

      </View>
  );
};

export default App;
