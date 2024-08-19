// frontend/src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileList from './components/FileList';

function App() {
  return (
    <div className="App">
      <h1 className="text-center my-4">Files Data</h1>
      <FileList />
    </div>
  );
}

export default App;
