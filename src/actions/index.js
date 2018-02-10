import API_KEY from './env'

export const setBoard = () => dispatch => {
  fetch(`http://api.giphy.com/v1/gifs/search?q=cat&api_key=${API_KEY}`)
    .then(response=> response.json())
    .then(res => {
      dispatch({type: 'SET_BOARD', res})
      })
}
