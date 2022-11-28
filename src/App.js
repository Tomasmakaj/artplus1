import React from 'react'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card'
import Mission from './components/mission/Mission'
import Partner from './components/partner/Partner';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mission />
      <Card />
      <Partner />
    </div>
  );
}

export default App;