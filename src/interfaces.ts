export interface IGameInfo {
  roomNumber: number;
  host: IUser;
  players: IUser[];
}

export interface IUser {
  username: string;
  generatedID: number;
  socketID: string;
}
