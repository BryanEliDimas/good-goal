import React, {Component} from 'react'
import { firebaseApp } from '../firebase'
import { connect } from 'react-redux'
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import CompleteGoalList from './CompleteGoalList'

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut()
  }

  render() {
    return(
      <div style={{margin: '5px'}}>
        <h2>Good Goals</h2>
        <AddGoal />
        <hr />
        <GoalList />
        <hr />
        <div>Done</div>
        <CompleteGoalList />
        <button className="btn btn-danger" onClick={() => this.signOut()}>Sign out</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 return {

 }
}

// const mapDispatchToProps = (dispatch) => {

// }

export default connect(mapStateToProps)(App)
