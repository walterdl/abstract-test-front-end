import { Game } from 'common/game'

export default class GameCreator {
  public async save(_: Game): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('bla')
      }, 1000)
    })
  }
}

