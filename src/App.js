import logo from '../src/images/logo.png';
import './App.css';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="MAPP SUPREME" />
        <Banner />
      </header>
    </div>
  );
}

export default App;