import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <ItemListContainer />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
