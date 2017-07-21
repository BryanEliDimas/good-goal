import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import {Router, Route, browserHistory} from 'react-router'
import { firebaseApp } from './firebase'
import reducer from './reducers'
import { logUserInAction } from './actions'

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user has signed up or in', user)

    store.dispatch(logUserInAction(user.email))

    browserHistory.push('/app')
  } else {
    console.log('user has signed out or still needs to sign in')
    browserHistory.replace('/signin')
  }
})

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </Router>
  </Provider>
  , document.getElementById('root')
)
