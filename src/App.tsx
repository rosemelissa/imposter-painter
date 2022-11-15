import { useState } from "react";
import Home from "./components/Home";
import JoinGame from "./components/JoinGame";
import NewGame from "./components/NewGame";
import Gameplay from "./components/Gameplay";
import Loading from "./components/Loading";

function App(): JSX.Element {
  const [page, setPage] = useState<
    "home" | "join-game" | "new-game" | "gameplay"
  >("home");
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      {loading && <Loading />}
      {page === "home" && <Home setPage={setPage} />}
      {page === "join-game" && <JoinGame setLoading={setLoading}/>}
      {page === "new-game" && <NewGame setLoading={setLoading}/>}
      {page === "gameplay" && <Gameplay />}
    </>
  );
}

export default App;
