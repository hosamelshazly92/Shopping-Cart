import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <Main />
        <Basket />
      </div>
    </div>
  );
}

export default App;
