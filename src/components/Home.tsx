import { useEffect, useState } from "react";
import { socket } from "../App";
import { IGameInfo } from "../interfaces";

interface IHomeProps {
  setPage: React.Dispatch<
    React.SetStateAction<"join-game" | "home" | "waiting-room" | "gameplay">
  >;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  generatedID: number;
  setGeneratedID: React.Dispatch<React.SetStateAction<number>>;
  setRoomNumber: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setGameInfo: React.Dispatch<React.SetStateAction<IGameInfo | null>>;
}

export default function Home({
  setPage,
  username,
  setUsername,
  generatedID,
  setGeneratedID,
  setRoomNumber,
  setLoading,
  setGameInfo,
}: IHomeProps): JSX.Element {
  const [connectedToSocket, setConnectedToSocket] = useState<boolean>(false);

  useEffect(() => {
    socket.on("new user created", (generatedID) => {
      setGeneratedID(generatedID);
      setConnectedToSocket(true);
      setLoading(false);
    });
    socket.on("new game created", (roomNumber, hostUsername, hostGeneratedID, hostSocketID, players) => {
      setRoomNumber(roomNumber);
      setLoading(false);
      setPage("waiting-room");
      setGameInfo({
        roomNumber: roomNumber,
        host: {
          username: hostUsername,
          generatedID: hostGeneratedID,
          socketID: hostSocketID,
        },
        players,
      })
    });
    // return () => {
    //   socket.off("messages updated");
    // };
  }, []);

  const handleSubmitUsername = async () => {
    setLoading(true);
    socket.emit("new user", username);
  };

  const handleCreateNewGame = () => {
    setLoading(true);
    socket.emit("new game", username, generatedID);
  };

  return (
    <>
      <h1>Home</h1>
      {connectedToSocket ? (
        <>
          <p>Hi {username}!</p>
          <button onClick={() => setPage("join-game")}>Join game</button>
          <button onClick={handleCreateNewGame}>New game</button>
        </>
      ) : (
        <>
          <p>Enter your name:</p>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            disabled={username.length === 0}
            onClick={handleSubmitUsername}
          >
            Submit
          </button>
        </>
      )}
    </>
  );
}
