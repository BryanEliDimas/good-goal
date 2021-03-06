let user = {
  email: ''
}

export default (state = user, action) => {
  switch (action.type) {
    case 'SIGNED_IN':
      user = {
        email: action.email
      }
      return user
    default:
      return state
  }
}
