import React from 'react';
import User from './container/user/user'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <User/>
    </div>
    </BrowserRouter>
  );
}

export default App;

