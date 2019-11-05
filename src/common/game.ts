export interface Game {
  id: string;
  name: string;
  date: Date;
  type: GameType;
  placeId: string;
}

export enum GameType {
  FOOTBALL = 'FOOTBALL',
  SMALL_FOOTBALL = 'SMALL_FOOTBALL',
  EXTRA_SMALL_FOOTBALL = 'EXTRA_SMALL_FOOTBALL'
}

export function getGameTypeFriendlyName(gameType: GameType): string {
  switch (gameType) {
    case GameType.FOOTBALL.toString():
      return 'Fútbol'
    case GameType.SMALL_FOOTBALL:
      return 'Futbolito'
    case GameType.EXTRA_SMALL_FOOTBALL:
      return 'Baby Fútbol'
    default:
      return ''
  }
}

export function getEmptyGame(): Game {
  return {
    id: '',
    name: '',
    date: null as any,
    type: '' as any,
    placeId: ''
  }
}
