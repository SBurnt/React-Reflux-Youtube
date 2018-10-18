import React from 'react';
import './css/App.css';

import SearchForm from "./SearchForm";
import VideoListMini from "./VideoListMini";
import VideoSelectedMain from "./VideoSelectedMain";

function App(props) {
  return (
    <div className="App">
      <SearchForm />
      <VideoListMini />
      <VideoSelectedMain />
    </div>
  )
}

export default App;