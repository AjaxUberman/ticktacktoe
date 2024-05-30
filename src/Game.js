import React, { useEffect, useState } from "react";
import { winningCombinations } from "./WinningCond";

const Game = () => {
  const [winner, setWinner] = useState("");
  const [board, setBoard] = useState(
    Array.from({ length: 9 }, (_, i) => {
      return null;
    })
  );
  const [player, setPlayer] = useState("X");

  /* Click Play */
  const playHandler = (index) => {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      if (newBoard[index] === null) {
        newBoard[index] = player;
      }
      return newBoard;
    });
    setPlayer(() => {
      if (player === "X") return "0";
      else return "X";
    });
  };

  /* Reset */
  const resetHandler = () => {
    setBoard(
      Array.from({ length: 9 }, (_, i) => {
        return null;
      })
    );
    setPlayer("X");
    setWinner("");
  };

  /* Winner */
  useEffect(() => {
    winningCombinations.map((i, index) => {
      const [a, b, c] = i;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        resetHandler();
        setWinner(() => {
          if (player === "X") return "0";
          else return "X";
        });
      }
    });
  }, [board]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="">Next Player : {player}</h1>
        <button
          className="bg-red-400 text-white rounded-md shadow-md py-2 w-24 border border-black hover:bg-red-500 hover:scale-110 transition duration-100 ease-in"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
      <div className="w-72 h-72 bg-gray-400 grid grid-cols-3 items-center ">
        {board.map((j, index) => (
          <button
            className="bg-gray-200 w-20 h-20 translate-x-2"
            onClick={() => playHandler(index)}
            disabled={board[index] !== null}
          >
            {j}
          </button>
        ))}
      </div>
      {winner ? (
        <div className="bg-green-400 text-white rounded-md w-40 h-40 text-center flex flex-col justify-center items-center">
          <span>Kazanan oyuncu </span>
          <h1 className="text-3xl font-bold">{winner}</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Game;
