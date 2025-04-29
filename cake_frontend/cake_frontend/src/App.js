import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Hello World</h1>
      <form >
        <input 
          type="text"
          name="name"
          placeholder="login"
        />
        <input
          type="password"
          name="password"    
          placeholder="password"
        />
        <button type="submit"> Login </button>
      </form>
    </div>
  );
}

export default App;
