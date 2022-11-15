import { useState } from "react";
import { io } from "socket.io-client";
import Home from "./components/Home";
import JoinGame from "./components/JoinGame";
import NewGame from "./components/NewGame";
import Gameplay from "./components/Gameplay";
import Loading from "./components/Loading";
import WaitingRoom from "./components/WaitingRoom";
import { IGameInfo } from "./interfaces";
export const socket = io(
  "https://ImposterPainterSocketIORooms.rosemelissa.repl.co"
);

function App(): JSX.Element {
  const [page, setPage] = useState<
    "home" | "join-game" | "waiting-room" | "gameplay"
  >("home");
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [generatedID, setGeneratedID] = useState<number>(0);
  const [roomNumber, setRoomNumber] = useState<number>(0);
  const [gameInfo, setGameInfo] = useState<IGameInfo|null>(null)

  return (
    <>
      {loading && <Loading />}
      {page === "home" && (
        <Home
          setPage={setPage}
          username={username}
          setUsername={setUsername}
          generatedID={generatedID}
          setGeneratedID={setGeneratedID}
          setRoomNumber={setRoomNumber}
          setLoading={setLoading}
          setGameInfo={setGameInfo}
        />
      )}
      {page === "join-game" && <JoinGame setLoading={setLoading} username={username} generatedID={generatedID} setPage={setPage} setRoomNumber={setRoomNumber} setGameInfo={setGameInfo} />}
      {page === "waiting-room" && <WaitingRoom gameInfo={gameInfo} setGameInfo={setGameInfo} />}
      {page === "gameplay" && <Gameplay />}
    </>
  );
}

export default App;
