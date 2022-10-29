import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { AppRouter } from './containers/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
