// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: [], isLoading: true}

  componentDidMount() {
    this.getRecentMatchDetailsFromServer()
  }

  getRecentMatchDetailsFromServer = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const responseData = await response.json()
    const updatedMatchesData = {
      teamBannerUrl: responseData.team_banner_url,
      latestMatchDetails: {
        id: responseData.latest_match_details.id,
        umpires: responseData.latest_match_details.umpires,
        result: responseData.latest_match_details.result,
        manOfTheMatch: responseData.latest_match_details.man_of_the_match,
        date: responseData.latest_match_details.date,
        venue: responseData.latest_match_details.venue,
        competingTeam: responseData.latest_match_details.competing_team,
        competingTeamLogo:
          responseData.latest_match_details.competing_team_logo,
        firstInnings: responseData.latest_match_details.first_innings,
        secondInnings: responseData.latest_match_details.second_innings,
        matchStatus: responseData.latest_match_details.match_status,
      },
      recentMatches: responseData.recent_matches.map(eachRecentMatch => ({
        umpires: eachRecentMatch.umpires,
        result: eachRecentMatch.result,
        manOfTheMatch: eachRecentMatch.man_of_the_match,
        id: eachRecentMatch.id,
        date: eachRecentMatch.date,
        venue: eachRecentMatch.venue,
        competingTeam: eachRecentMatch.competing_team,
        competingTeamLogo: eachRecentMatch.competing_team_logo,
        firstInnings: eachRecentMatch.first_innings,
        secondInnings: eachRecentMatch.second_innings,
        matchStatus: eachRecentMatch.match_status,
      })),
    }
    console.log(updatedMatchesData)
    this.setState({teamMatchesData: updatedMatchesData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamMatchesComponents = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatchesData
    return (
      <div className="team-matches-content" testid="loader">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestMatchData={latestMatchDetails} />
        {this.renderRecentMatchDataList()}
      </div>
    )
  }

  renderRecentMatchDataList = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData
    return (
      <ul className="recent-match-list">
        {recentMatches.map(eachMatchData => (
          <MatchCard key={eachMatchData.id} matchCardDetails={eachMatchData} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-matches-container ${id}`} testid="loader">
        {isLoading ? this.renderLoader() : this.renderTeamMatchesComponents()}
      </div>
    )
  }
}
export default TeamMatches
