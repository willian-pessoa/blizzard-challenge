import './App.scss';

import NavBar from './components/NavBar/NavBar';
import BannerHero from './components/BannerHero/BannerHero';
import Footer from './components/Footer/Footer';
import ExclusiveGames from './components/ExclusiveGames/ExclusiveGames';

function App() {
  return (
    <div className="App">
      <header className='App__header'>
        <NavBar />
        <BannerHero />
      </header>
      <ExclusiveGames />
      <Footer />
    </div>
  );
}

export default App;
