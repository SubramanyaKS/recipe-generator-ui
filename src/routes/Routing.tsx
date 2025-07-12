// routing for home and Auth page

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import NavBar from '../component/NavBar';
import { RecipeProvider } from '../context/RecipeContext';
import NotFound from '../pages/NotFound'
import ProtectedRoute from './ProtectedRoute';
import HeroSection from '../pages/HeroSection';
import { AuthProvider } from '../context/AuthContext';

const Routing: React.FC = () => {
  return (
    <AuthProvider>
    <RecipeProvider>
      <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<HeroSection />} />
          <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
          <Route path="/auth" Component={Auth} />
          <Route Component={NotFound} />
        </Routes>
      </Router>
    </RecipeProvider>
    </AuthProvider>
  );
}

export default Routing;