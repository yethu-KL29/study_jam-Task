import './App.css';
import {useState} from 'react';
function App() {
  const [count, setcount] = useState(10)
  return (
    <div className="App">
     <>
      count: {count}
      </>
      <div className='buttons'>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
