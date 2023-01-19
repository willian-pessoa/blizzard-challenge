import './App.scss';

import NavBar from './components/NavBar/NavBar';
import BannerHero from './components/BannerHero/BannerHero';

function App() {
  return (
    <div className="App">
      <header className='App_header'>
        <NavBar />
        <BannerHero />
      </header>
    </div>
  );
}

export default App;
