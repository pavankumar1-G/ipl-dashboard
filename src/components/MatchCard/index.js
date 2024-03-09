// Write your code here
import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  render() {
    const {matchCardDetails} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} =
      matchCardDetails
    const isWinOrLost = matchStatus === 'Won' ? 'won' : 'lost'

    return (
      <li className="match-card-item">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="card-logo"
        />
        <p className="team-card-name">{competingTeam}</p>
        <p className="card-recent-result">{result}</p>
        <p className={`'card-match-status' ${isWinOrLost}`}>{matchStatus}</p>
      </li>
    )
  }
}
export default MatchCard
