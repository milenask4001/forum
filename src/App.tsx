import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router';
import {Homepage} from './components/Homepage/Homepage';
import {PostList} from './components/PostList/PostList';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage id={0} />} />
        <Route path='/PostList' element={<PostList />} />
      </Routes>
    </div>
  );
}

export default App;
