export interface Game {
  id: string;
  name: string;
  date: Date;
  localeDate: string;
  type: GameType;
}

export enum GameTypeNames {
  Football = 'FOOTBALL',
  SFootball = 'SFOOTBALL',
  XSFootball = 'XSFOOTBALL'
}

export class GameType {
  constructor(public name: GameTypeNames) { }

  public getFriendlyName(): string {
    switch (this.name) {
      case GameTypeNames.Football:
        return 'Fútbol'
      case GameTypeNames.SFootball:
        return 'Futbolito'
      case GameTypeNames.XSFootball:
        return 'Baby Fútbol'
    }
  }
}
