import React, {useState} from 'react';
import type {Node} from 'react';
import Header from './src/components/uikit/Header';

const App: () => Node = () => {
  let [title, setTitle] = useState('Hello world');
  return <Header title={title} />;
};

export default App;
