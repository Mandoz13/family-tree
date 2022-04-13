import React from 'react';
import { AnimatedTree } from 'react-tree-graph';
import data from './data';
import 'react-tree-graph/dist/style.css'
import './App.css';


export default function App() {
  return (
      <AnimatedTree data={data} height={600} width={1300} />
  );
}
