import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Chart from './pages/Chart';
import GlobalKpopChart from './pages/Chart/GlobalChart/ModernGlobalChart'
import SocialChart from './pages/Chart/SocialChart/SocialChart'

import News from './pages/News';
import Archive from './pages/Archive';
import Community from './pages/Community';
import Certification from './pages/Certification';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/chart/global-kpop" element={<GlobalKpopChart />} />
            <Route path="/chart/social" element={<SocialChart />} />
            <Route path="/news" element={<News />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/community" element={<Community />} />
            <Route path="/certification" element={<Certification />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
