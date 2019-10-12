const initState = {
  user: 'llr'
}

export default function user(state = initState, action) {
  switch (action.type) {
    case 'a':
      return state
    default:
      return state
  }
}
