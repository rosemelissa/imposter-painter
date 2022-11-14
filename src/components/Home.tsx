interface IHomeProps {
    setPage: React.Dispatch<React.SetStateAction<"join-game" | "home" | "new-game" | "gameplay">>;
}

export default function Home({setPage}: IHomeProps): JSX.Element {
  return (
  <>
    <h1>Home</h1>
    <button onClick={() => setPage('join-game')}>Join game</button>
    <button onClick={() => setPage('new-game')}>New game</button>
  </>)
}
