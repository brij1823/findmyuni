import { BASE_URL } from '../assets/String'

export function getAllComplaints() {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: 'GET_CHATS',
          subtype: 'loading',
        })
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
        }

        fetch(`${BASE_URL}findcomplaints`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
            dispatch({
              type: 'GET_CHATS',
              subtype: 'success',
              complaintsData: result.complaints,
            })
            resolve(result)
          })
          .catch((error) => {
            console.log('complaints error', error)
            rejects(error)
          })
      } catch (e) {
        dispatch({
          type: 'GET_CHATS',
          error: e,
        })
        rejects(e)
      }
    })
  }
}

export function getAllUsers() {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: 'GET_USERS',
          subtype: 'loading',
        })
        var requestOptions = {
          method: 'GET',
          redirect: 'entries',
        }

        fetch(`${BASE_URL}`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
            dispatch({
              type: 'GET_USERS',
              subtype: 'success',
              userData: result.entries,
            })
            resolve(result)
          })
          .catch((error) => {
            console.log('complaints error', error)
            rejects(error)
          })
      } catch (e) {
        dispatch({
          type: 'GET_USERS',
          error: e,
        })
        rejects(e)
      }
    })
  }
}