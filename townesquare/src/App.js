import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home'
import SocialProfile from './pages/SocialProfile'
import LandingPage from './pages/LandingPage'
import Marketplace from './pages/Marketplace'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<SocialProfile />} />
          <Route path="/welcome" element={<LandingPage />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
