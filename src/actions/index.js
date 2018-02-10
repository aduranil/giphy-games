import API_KEY from './env'

// shuffles deck of gifs so they are in a random order
const shuffleGifs = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// fetches cat gifs
export const setBoard = () => dispatch => {
  fetch(`http://api.giphy.com/v1/gifs/search?q=cat&api_key=${API_KEY}`)
    .then(response=> response.json())
    .then(res => {
      let data  = res.data.slice(0,4)
      data = data.concat(data)
      shuffleGifs(data)
      dispatch({type: 'SET_BOARD', data})
      })
}
