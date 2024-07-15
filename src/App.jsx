import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Landing from './pages/Landing/Landing';
import List from './pages/List/List';
=======
import Landing from './pages/Landing';
import List from './pages/List';
>>>>>>> 596ea655853c4c5e975862786861ea9c2bf04e24
import Mypage from './pages/Mypage/Mypage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/list" element={<List />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Router>
  );
}

export default App;
