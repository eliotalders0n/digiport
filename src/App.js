import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import './App.css';

// Import your page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AccountCreationPage from './pages/AccountCreationPage';
import DashboardPage from './pages/DashboardPage';
import RenewPassportPage from './pages/RenewPassportPage';
import ApplyNewPassportPage from './pages/ApplyNewPassportPage';
import ReviewApplicationPage from './pages/ReviewApplicationPage';
import ConfirmationPage from './pages/ConfirmationPage';
import TrackApplicationPage from './pages/TrackApplicationPage';
import ProfilePage from './pages/ProfileSettingsPage';
import HelpPage from './pages/HelpPage';
import PassportPage from './pages/PassportPage';
import BottomNav from './comps/bottomNav';
import EmergencyContactsPage from './pages/EmergencyContacts';
import DocumentsPage from './pages/Documents';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          {/* Define the routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/emergency-contacts" element={<EmergencyContactsPage />} />
            <Route path="/create-account" element={<AccountCreationPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/passport" element={<PassportPage />} />
            <Route path="/renew-passport" element={<RenewPassportPage />} />
            <Route path="/apply-new-passport" element={<ApplyNewPassportPage />} />
            <Route path="/review-application" element={<ReviewApplicationPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/track-application" element={<TrackApplicationPage />} />
            <Route path="/profile-page" element={<ProfilePage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
          <BottomNav/>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
