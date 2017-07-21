import React, {Component} from 'react'
import {connect} from 'react-redux'
import {completeGoalRef} from '../firebase'
import {setCompleted} from '../actions'
import GoalItem from './GoalItem'

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', dataSnapShot => {
      let completeGoals = []

      dataSnapShot.forEach(completeGoal => {
        const {email, title} = completeGoal.val()

        completeGoals.push({email, title,})
      })
      console.log(completeGoals)
      this.props.setCompleted(completeGoals)
    })
  }

  clearAllCompleted() {
    completeGoalRef.set([])
  }

  render() {
    return(
      <div>
      {
        this.props.completeGoals.map((completeGoal, index) => {
          const {title, email} = completeGoal

          return(
            <div key={index}>
              <strong>{title}</strong> completed by {email}
            </div>
          )
        })
      }

      <button className="btn btn-default"
        onClick={() => this.clearAllCompleted()}
      >Clear All</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    completeGoals: state.completeGoals
  }
}

// setGoals is an action or action creator
export default connect(mapStateToProps, { setCompleted })(CompleteGoalList)

