import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MarketplaceListing from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import SellItem from './components/SellItem/SellItem';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile'
import FurniturePage from './components/FurniturePage/FurniturePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<MarketplaceListing />} />
        <Route path='/' element={<MarketplaceListing />} />
        <Route path="/marketplace" element={<MarketplaceListing />} />
        <Route path="/sell" element={<SellItem />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/furniture" element={<FurniturePage />} />
      </Routes>
    </div>
  );
}

export default App;

