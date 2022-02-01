import './App.css';
import { Soundbox } from './components/Soundbox';
function App() {
  //([key,value]) is called destructing, instead of (key,value)

  return (
    <div className="App">
      <h2>SoundBox</h2>
      <Soundbox />
    </div>
  );
}

export default App;
