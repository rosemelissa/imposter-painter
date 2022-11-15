import { useEffect, useState } from "react";
import { socket} from "../App";

interface IHomeProps {
  setPage: React.Dispatch<
    React.SetStateAction<"join-game" | "home" | "new-game" | "gameplay">
  >;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  generatedID: number;
  setGeneratedID: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home({ setPage, username, setUsername, generatedID, setGeneratedID, setLoading }: IHomeProps): JSX.Element {
  const [connectedToSocket, setConnectedToSocket] = useState<boolean>(false);

  useEffect(() => {
    socket.on("new user created", (generatedID) => {
      setGeneratedID(generatedID);
      setConnectedToSocket(true);
      setLoading(false);
    });
    // return () => {
    //   socket.off("messages updated");
    // };
  }, []);

  const handleSubmitUsername = async () => {
    setLoading(true);
    socket.emit("new user", username);
  }

  return (
    <>
      <h1>Home</h1>
      {connectedToSocket ? 
      <>
      <p>Hi {username}!</p>
      <button onClick={() => setPage("join-game")}>Join game</button>
      <button onClick={() => setPage("new-game")}>New game</button>
      </>:
      <>
      <p>Enter your name:</p>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button disabled={username.length === 0} onClick={handleSubmitUsername}>Submit</button>
      </>
      }
    </>
  );
}
