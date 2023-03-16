import './App.css';
import "./bootstrap.min.css"
import Header from './components/cabezera';
import Cuerpo from './components/cuerpo'

function App() {
  return (
    <div className="App">
      <Header/>
      <Cuerpo/>      
    </div>
  );
}

export default App;
