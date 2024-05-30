import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";

function App() {
  return (
    <div className="App font-bold py-10">
      <div className=" text-3xl ">
        <h1>Hello Dev</h1>
        <h2 className="py-4">
          Try to make a Tick Tack Toe game
          <br /> like the one below
        </h2>
      </div>
      <Game />
    </div>
  );
}

export default App;
