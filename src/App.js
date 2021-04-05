import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
