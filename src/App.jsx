import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { LocaleProvider } from './contexts/LocaleContext.jsx';

import NavBar from './components/NavBar.jsx';

import Home from './pages/Home.jsx';

import Events from './pages/Events.jsx';

import Memories from './pages/Memories.jsx';

import Team from './pages/Team.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </BrowserRouter>
      </LocaleProvider>
    </ThemeProvider>
  );
}