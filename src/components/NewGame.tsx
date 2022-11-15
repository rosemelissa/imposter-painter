import { useState } from "react";
import { socket } from "../App"

interface INewGameProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewGame({setLoading}: INewGameProps): JSX.Element {
  const [username, setUsername] = useState<string>("");

  const handleNewGame = async () => {
    socket.emit("new game", username)
  }

  return (
    <>
      <h1>New Game</h1>
      <p>Enter your name:</p>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button disabled={username.length === 0} onClick={handleNewGame}>Submit</button>
    </>
  );
}
