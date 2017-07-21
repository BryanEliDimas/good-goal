import React, {Component} from 'react'
import {completeGoalRef, goalRef} from '../firebase'
import {connect} from 'react-redux'

class GoalItem extends Component {
  completeGoal() {
    const {email} = this.props.user
    const {title, firebaseKey} = this.props.goal

    completeGoalRef.push({email, title})
    goalRef.child(firebaseKey).remove()
  }

  render() {
    const {email, title} = this.props.goal

    return (
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
        <button className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
        >
          Complete
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(GoalItem)
