import React from 'react';
import Tree from 'react-tree-graph';
import { AnimatedTree } from 'react-tree-graph';
import data from './data';
import 'react-tree-graph/dist/style.css'
import './App.css';

// const App: React.FC = (props: any) => {
//   return (
//     <AnimatedTree
// 	data={data}
// 	height={700}
// 	width={1000}/>
//   );
// }
export default function App() {
  return (
      <AnimatedTree data={data} height={500} width={900} />
  );
}
 // export default App;
