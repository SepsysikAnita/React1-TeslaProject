
import './App.css';
import Header from './components/Header';
import Logo from './assets/logo.svg';
import Menu from './assets/menu.svg';
import Item from './components/Item';
import ModelS from './assets/models.jpg'

function App() {
  return (
    <div className="App">
      <Header
      logo={Logo}
      menu={Menu}
      />

      <Item
        heading= "Model S"
        img={ModelS}
      />
    </div>
  );
}

export default App;
