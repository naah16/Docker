import './App.css';
import Confetti from './Confetti';

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>
          Hello World!
        </h1>
        <div>
          <a target="_blank" href={"https://www.linkedin.com/in/naarah-oliveira-695b04209/"} class="fa fa-linkedin" rel="noopener noreferrer"> </a>
          <a target="_blank" href={"https://github.com/naah16"} class="fa fa-github" rel="noopener noreferrer"> </a>
        </div>
      </header>
    </div>
  );
}

export default App;
