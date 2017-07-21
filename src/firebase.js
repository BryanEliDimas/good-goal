import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCGN38R_BWdPj-v6E7KRJlWFrw2il0oM7E",
  authDomain: "good-goal.firebaseapp.com",
  databaseURL: "https://good-goal.firebaseio.com",
  projectId: "good-goal",
  storageBucket: "",
  messagingSenderId: "864339874912"
}

export const firebaseApp = firebase.initializeApp(config)
export const goalRef = firebase.database().ref('goals')
export const completeGoalRef = firebase.database().ref('completeGoals')
