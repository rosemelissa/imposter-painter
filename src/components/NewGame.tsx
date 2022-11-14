import { useState } from "react";

export default function NewGame(): JSX.Element {
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
