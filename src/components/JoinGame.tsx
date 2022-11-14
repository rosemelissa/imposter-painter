import { useState } from "react";

export default function JoinGame(): JSX.Element {
  const [userGameCodeInput, setUserGameCodeInput] = useState<string>("");
  return (
    <>
      <h1>JoinGame</h1>
      <p>Enter game code:</p>
      <input
        value={userGameCodeInput}
        onChange={(e) => setUserGameCodeInput(e.target.value)}
      />
      <button disabled={userGameCodeInput.length === 0}>Submit</button>
    </>
  );
}
