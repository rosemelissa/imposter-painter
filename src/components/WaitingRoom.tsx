interface IWaitingRoomProps {
    roomNumber: number;
}

export default function WaitingRoom({roomNumber}: IWaitingRoomProps): JSX.Element {
    return (
        <>
            <h1>Waiting Room</h1>
            <h2>Room number ${roomNumber}</h2>
            <h2>Host: </h2>
            <h2>Players:</h2>
        </>
    )
}