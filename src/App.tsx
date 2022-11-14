import { useState } from "react";
import Home from "./components/Home";
import JoinGame from "./components/JoinGame";
import NewGame from "./components/NewGame";
import Gameplay from "./components/Gameplay";

function App(): JSX.Element {
  const [page, setPage] = useState<
    "home" | "join-game" | "new-game" | "gameplay"
  >("home");
  return (
    <>
      {page === "home" && <Home setPage={setPage}/>}
      {page === "join-game" && <JoinGame />}
      {page === "new-game" && <NewGame />}
      {page === "gameplay" && <Gameplay />}
    </>
  );
}

export default App;
