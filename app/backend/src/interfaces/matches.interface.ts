export interface IMatches {
  id?: number,
  homeTeam: number,
  homeTeamGoals: number,
  awayTeam: number,
  awayTeamGoals: number,
  inProgress?: boolean | string,
}

export default interface ICustomMatches extends IMatches {
  teamHome: {
    teamName: string
  },
  teamAway: {
    teamName: string
  }
}
