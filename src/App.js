import "./App.css";
import Instructions from "./components/Instructions";
import TicTacToe from "./components/TicTacToe";

function App() {
  return (
    <div classname="App">
      <header className="sticky-top py-2">
        <h1 className="text-center">
          <span className="text-danger">Tic</span>
          <span className="text-success">Tac</span>
          <span className="text-primary">Toe</span>
        </h1>
      </header>
      <div className="container py-4">
        <div className="row">
          <Instructions />
          <TicTacToe />
        </div>
      </div>
    </div>
  );
}

export default App;
