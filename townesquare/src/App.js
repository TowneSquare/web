import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home'
import SocialProfile from './pages/SocialProfile'
import LandingPage from './pages/LandingPage'
import Marketplace from './pages/Marketplace'
import Feed from './pages/Feed'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Disclaimer from './pages/Disclaimer'
import Team from './pages/Team'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<SocialProfile />} /> */}
          <Route path="/welcome" element={<LandingPage />} />
          {/* <Route path="/marketplace" element={<Marketplace />} /> */}
          <Route path="/feed" element={<Feed />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
