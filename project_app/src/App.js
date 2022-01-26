import './App.css';
import React from 'react';
import BannerImage from './components/BannerImage';
import AlbumMaker from './components/AlbumMaker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <div>
          <h1>Welcome to  My Photo Journal</h1>
          <h3>By Mariya Turetska</h3>
          <AlbumMaker />
        </div>

      </header>
    </div>
  );
}

// Always export the functions
export default App;
