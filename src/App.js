
import './App.css';
import Header from './components/Header';
import Logo from './assets/logo.svg';
import Menu from './assets/menu.svg';

function App() {
  return (
    <div className="App">
      <Header
      logo={Logo}
      menu={Menu}
      />
    </div>
  );
}

export default App;
