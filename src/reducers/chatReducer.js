const initialState = []

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHATS':
      return {
        ...state,
        chatDataError: action.error ? action.error : null,
        chatDataSuccess: action.subtype === 'success',
        chatDataLoading: action.subtype === 'loading',
        chatData:
          action.subtype === 'success'
            ? action.chatData
            : state.chatData,
      }

    default:
      return state
  }
}

export default chatReducer