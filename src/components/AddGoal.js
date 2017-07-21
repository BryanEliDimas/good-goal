import React, {Component} from 'react'
import {connect} from 'react-redux'
import {goalRef} from '../firebase'

class AddGoal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  addGoal() {
    console.log('this', this)
    const {title} = this.state
    const {email} = this.props.user // comes from redux

    goalRef.push({email, title})
  }

  render() {
    return(
      <div className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control"
            placeholder="New goal" style={{marginRight: '5px'}}
            onChange={(e) => this.setState({title: e.target.value})} />
          <button className="btn btn-success"
            onClick={() => this.addGoal()}
          >Submit</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // makes `email` available as a prop——which comes from state——in our connected component
  return {
    user: state.user
  }
}

// no function mapDispatchToProps(), therefore dispatch() will be available in our
// connected component automatically
export default connect(mapStateToProps)(AddGoal)
