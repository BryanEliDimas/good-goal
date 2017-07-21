import React, {Component} from 'react'
import {connect} from 'react-redux'
import {goalRef} from '../firebase'
import {setGoals} from '../actions'
import GoalItem from './GoalItem'

class GoalList extends Component {
  componentDidMount() {
    goalRef.on('value', dataSnapShot => {
      let goals = []

      dataSnapShot.forEach(goal => {
        const {email, title} = goal.val()
        const firebaseKey = goal.key

        goals.push({email, title, firebaseKey})
      })
      console.log(goals)
      this.props.setGoals(goals)
    })
  }

  render() {
    return(
      <div>
      {
        this.props.goals.map((goal, index) => {
          return(
            <GoalItem key={index} goal={goal} />
          )
        })
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals
  }
}

// setGoals is an action or action creator
export default connect(mapStateToProps, { setGoals })(GoalList)
