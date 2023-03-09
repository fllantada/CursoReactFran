import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button color='red' label="mi boton" callback={() => console.log('click')}/>
    </div>
  );
}

export default App;
