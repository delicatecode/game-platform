


interface IGameRepository {
  getAll: () => void;
  get: (developerId: string, gameId: string) => void;
}





export default class GameRepository implements IGameRepository {
  constructor () {}


  getAll () {

  }

  get (developerId: string, gameId: string) {

  }
}
