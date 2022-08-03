import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home'
import SocialProfile from './pages/SocialProfile'
import LandingPage from './pages/LandingPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<SocialProfile />} />
          <Route path="/welcome" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
