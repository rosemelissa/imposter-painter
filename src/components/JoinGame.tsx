import { useEffect, useState } from "react";
import { socket } from "../App";

interface IJoinGameProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  generatedID: number;
  setPage: React.Dispatch<React.SetStateAction<"waiting-room" | "join-game" | "home" | "gameplay">>;
  setRoomNumber: React.Dispatch<React.SetStateAction<number>>;
}

export default function JoinGame({ setLoading, username, generatedID, setPage, setRoomNumber }: IJoinGameProps): JSX.Element {
  const [roomNumberInput, setRoomNumberInput] = useState<string>("");

  useEffect(() => {
    socket.on("successfully joined game", (roomNumber) => {
      setRoomNumber(roomNumber);
      // setHostID(generatedID);
      setLoading(false);
      setPage("waiting-room");
    });
    socket.on("game full", () => {
      setLoading(false);
      window.alert("Couldn't join game because that room is currently full (max. 8 players per room)");
    });
    socket.on("no game matching room number", () => {
      setLoading(false);
      window.alert("Couldn't find a game with that room number")
    });
    // return () => {
    //   socket.off("messages updated");
    // };
  }, []);

  const handleJoinRoom = () => {
    setLoading(true);
    socket.emit("join game", username, generatedID, roomNumberInput);
  }

    return (
      <>
        <h1>Join Game</h1>
        <p>Enter room number:</p>
        <input
          value={roomNumberInput}
          onChange={(e) => setRoomNumberInput(e.target.value)}
        />
        <button disabled={roomNumberInput.length === 0} onClick={handleJoinRoom}>Submit</button>
      </>
    );
}
