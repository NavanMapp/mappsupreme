import React, { Link } from 'react'
import Banner from './components/Banner';
import About from './components/About';
import Service from './components/Service';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Banner>
        <Link to="/login" className="button">Sign In</Link>
      </Banner>
      <About />
      <Service />
      <Footer />
    </div>
  );
}

export default App;