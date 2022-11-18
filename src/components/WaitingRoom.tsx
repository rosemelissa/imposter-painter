import { useEffect } from "react";
import { socket } from "../App";
import { IGameInfo } from "../interfaces";

interface IWaitingRoomProps {
  gameInfo: IGameInfo | null;
  setGameInfo: React.Dispatch<React.SetStateAction<IGameInfo | null>>;
}

export default function WaitingRoom({
  gameInfo,
  setGameInfo,
}: IWaitingRoomProps): JSX.Element {
  console.log("game info", gameInfo);
  useEffect(() => {
    socket.on(
      "new player joined room",
      (roomNumber, hostUsername, hostGeneratedID, hostSocketID, players) => {
        setGameInfo({
          roomNumber: roomNumber,
          host: {
            username: hostUsername,
            generatedID: hostGeneratedID,
            socketID: hostSocketID,
          },
          players,
        });
      }
    );
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Waiting Room</h1>
      {gameInfo && (
        <>
          <h2>Room number {gameInfo.roomNumber}</h2>

          <h2>Host: </h2>
          <p>{gameInfo.host.username}</p>
          <h2>Players:</h2>
          {gameInfo.players.map((player, i) => {
            return <p key={i}>{player.username}</p>;
          })}
        </>
      )}
    </>
  );
}
