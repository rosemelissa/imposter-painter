import { useState } from "react";

interface INewGameProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewGame({setLoading}: INewGameProps): JSX.Element {
  const [username, setUsername] = useState<string>("");
  return (
    <>
      <h1>New Game</h1>
      <p>Enter your name:</p>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button disabled={username.length === 0}>Submit</button>
    </>
  );
}
