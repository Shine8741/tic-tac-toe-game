import useTictacToe from "../hooks/use-tic-tac-toe";
import clsx from "clsx";

function TicTacToe() {
  const { board, handleClick, resetGame, getStatusMessage, winnerInfo } = useTictacToe();

  return (
    <div className="game">
        <h1 className="title">Tic Tac Toe</h1>
        <p className="tagline">Classic strategy game – X or O,</p>
        <p>Let's see who’ll steal the show?</p>

      <div className="status">

        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((b, index) => {
          const isWinningCell = winnerInfo?.pattern?.includes(index);
          return (
            <button
              className={clsx("cell", { highlight: isWinningCell })}
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null || winnerInfo}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
