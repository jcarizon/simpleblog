import React from 'react';
import './assets/css/style.min.css';
import Header from './layouts/Header.js';
import Banner from './components/Banner.js';
import News from './components/News.js';
import Footer from './layouts/Footer.js';



function App() {
  return (
    <div className="App">
      <Header />
      <div class="_index">
        <Banner />
          <main class="_main">
              <News />
          </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
