import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Home />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;