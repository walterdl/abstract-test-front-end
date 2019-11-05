// Own
import { Game, GameType, GameTypeNames } from 'common/game-type'

export default class GamesProvider {
  private dummyGames: Game[] = [
    {
      id: '1',
      name: 'Pachange clásica',
      date: new Date(),
      localeDate: new Date().toLocaleString(),
      type: new GameType(GameTypeNames.Football)
    },
    {
      id: '2',
      name: 'Pachange moderna',
      date: new Date(),
      localeDate: new Date().toLocaleString(),
      type: new GameType(GameTypeNames.SFootball)
    },
    {
      id: '3',
      name: 'Con Nico',
      date: new Date(),
      localeDate: new Date().toLocaleString(),
      type: new GameType(GameTypeNames.XSFootball)
    }
  ]

  public getGames(): Promise<Game[]> {
    return new Promise(resolve => {
      setTimeout((
        resolve(this.dummyGames)
      ), 1000)
    })
  }
}
