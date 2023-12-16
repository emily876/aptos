import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ViewMyReviews from './pages/ViewMyReviews';
import MyReviews from './pages/MyReviews';
import AllReviews from './pages/AllReviews';
import Footer from './Components/Footer';
import DynamicPage from './pages/DynamicPage';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Vpn from './pages/Vpn';
import VerificationSteps from './pages/Verificationsteps';
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider, NetworkName } from "@aptos-labs/wallet-adapter-react";

const App: React.FC = () => {

  const background = {
    backgroundColor: '#11D9C5'
  }

  const wallets = [new PetraWallet()];
  
  return (
    <Router>
      <div style={background}>
        <Navbar/>
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>

        <Routes>
        <Route path="/view-my-reviews" element={<ViewMyReviews/>} />
          <Route path="/my-reviews" element={<MyReviews/>} />
          <Route path="/" element={<AllReviews />} />
          <Route path="/reviews/:id" Component={DynamicPage} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/vpn" element={<Vpn/>} />
          <Route path="/verification-steps" element={<VerificationSteps/>} />
        </Routes>
        </AptosWalletAdapterProvider>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
