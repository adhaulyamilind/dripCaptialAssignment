import ActionTypes from '../actionTypes'

const initialState = {
  isLoading: false,
}
const commonReducer = (state = initialState, action) => {
  let payload = {}
  try {
    payload = action.payload
  } catch (error) {
    payload = {}
  }

  switch (action.type) {
  case ActionTypes.SHOW_LOADER:
    return {
      ...state,
      isLoading: true
    }
  case ActionTypes.HIDE_LOADER:
    return {
      ...state,
      isLoading: false
    }  
  default:
    return state
  }
}

export default commonReducer