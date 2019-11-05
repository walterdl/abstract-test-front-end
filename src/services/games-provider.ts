// Own
import { Game, GameType } from 'common/game'

export default class GamesProvider {
  private dummyGames: Game[] = [
    {
      id: '1',
      name: 'Pachange clásica',
      date: new Date(),
      type: GameType.FOOTBALL,
      placeId: ''
    },
    {
      id: '2',
      name: 'Pachange moderna',
      date: new Date(),
      type: GameType.SMALL_FOOTBALL,
      placeId: ''
    },
    {
      id: '3',
      name: 'Con Nico',
      date: new Date(),
      type: GameType.EXTRA_SMALL_FOOTBALL,
      placeId: ''
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
