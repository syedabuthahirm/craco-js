import logo from './logo.svg';
import './App.css';
import { sum } from '@lib/calculation';
import { multiple } from 'section1/a';
import { divide } from 'section2/b'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {sum(1, 3)}
          {multiple(2, 8)}
          {divide(4, 2)}
        </a>
      </header>
    </div>
  );
}

export default App;
