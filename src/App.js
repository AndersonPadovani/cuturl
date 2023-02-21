import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Import Pages
import IndexPage from './pages/index/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
