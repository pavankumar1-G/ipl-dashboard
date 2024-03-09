// Write your code here
import './index.css'

import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatchData} = this.props
    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMatchData

    return (
      <div className="latest-match-container">
        <h1 className="latest-match-heading">Latest Matches</h1>
        <div className="latest-match-card">
          <div className="team-result-logo-details">
            <div className="team-result-details">
              <p className="competing-team">{competingTeam}</p>
              <p className="date">{date}</p>
              <p className="venue">{venue}</p>
              <p className="result">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="team-logo-sm"
            />
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="team-logo-sm"
          />

          <hr className="line" />

          <div className="team-additional-details">
            <div className="label-value">
              <p className="first-innings-label">First Innings</p>
              <p className="first-innings-value">{firstInnings}</p>
            </div>
            <div className="label-value">
              <p className="second-innings-label">Second Innings</p>
              <p className="second-innings-value">{secondInnings}</p>
            </div>
            <div className="label-value">
              <p className="man-of-the-match-label">Man Of The Match</p>
              <p className="man-of-the-match-value">{manOfTheMatch}</p>
            </div>
            <div className="label-value">
              <p className="umpires-label">Umpires</p>
              <p className="umpires-value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
