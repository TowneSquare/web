import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import SocialProfile from './pages/SocialProfile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<SocialProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
