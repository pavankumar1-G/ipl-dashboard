// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.getTeamListFromServer()
  }

  getTeamListFromServer = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const responseData = await response.json()
    const updatedData = responseData.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    console.log(updatedData)
    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="ipl-dashboard-bg-container" >
        <div className="logo-heading-container" >
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="home-heading">IPL Dashboard</h1>
        </div>
        <ul className="team-list">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamsList.map(eachTeam => (
              <TeamCard key={eachTeam.id} eachTeamDetails={eachTeam} />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default Home
