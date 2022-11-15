import { useState } from "react";

interface IJoinGameProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function JoinGame({ setLoading }: IJoinGameProps): JSX.Element {
  const [userGameCodeInput, setUserGameCodeInput] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [mode, setMode] = useState<"enter-game-code" | "enter-username">(
    "enter-username"
  );
  if (mode === "enter-username") {
    return (
      <>
        <h1>JoinGame</h1>
        <p>Enter username:</p>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button disabled={username.length === 0}>Submit</button>
      </>
    );
  } else {
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
}
