import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ServerManagement from './pages/ServerManagement';
import CustomCommands from './pages/CustomCommands';
import ModerationTools from './pages/ModerationTools';
import Settings from './pages/Settings';
import AutoResponder from './pages/AutoResponder';
import Leveling from './pages/Leveling';
import MusicPlayer from './pages/MusicPlayer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/*"
          element={
            <div className="flex h-screen bg-gray-100">
              <Sidebar />
              <div className="flex-1 overflow-x-hidden overflow-y-auto">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/servers" element={<ServerManagement />} />
                  <Route path="/commands" element={<CustomCommands />} />
                  <Route path="/moderation" element={<ModerationTools />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/auto-responder" element={<AutoResponder />} />
                  <Route path="/leveling" element={<Leveling />} />
                  <Route path="/music" element={<MusicPlayer />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;