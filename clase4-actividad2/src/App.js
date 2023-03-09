import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button color='red' callback={() => console.log('click')}>
        mi boton
      </Button>
    </div>
  );
}

export default App;
