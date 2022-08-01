import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react'
import Home from './pages/Home'
import SocialProfile from './pages/SocialProfile'

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<SocialProfile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
