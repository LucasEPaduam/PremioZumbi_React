import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardProvider from './context/cardProvider';
import firebase from './firebaseConfig';

import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import History from './components/history';
import Honored from './components/honored';
import Contact from './components/contact';
import Biography from './components/biography';
import Favoritos from './components/favoritos';
import Login from './components/login';
import AuthProvider from './context/authProvider';


function App() {


  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Header />
          <Footer />
          <CardProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Historia" element={<History />} />
              <Route path="/Homenageados" element={<Honored />} />
              <Route path="/Favoritos" element={<Favoritos />} />
              <Route path="/Contato" element={<Contact />} />
              <Route path="/Biografia/:id" element={<Biography />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </CardProvider>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
