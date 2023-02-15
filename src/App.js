import logo from './logo.svg';
import './App.css';
import LoginForm from './login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginForm/>
      </header>
    </div>
  );
}

export default App;
