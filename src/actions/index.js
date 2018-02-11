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
  fetch(`https://api.giphy.com/v1/gifs/search?q=cat&api_key=${API_KEY}`)
    .then(response=> response.json())
    .then(res => {
      // grabs the first 6 gifs
      let data  = res.data.slice(0,6)
      // copies them so there are two of each in the deck
      data = data.concat(data)
      // shuffles the order in the deck
      shuffleGifs(data)
      dispatch({type: 'SET_BOARD', data})
      })
}

// adds to arrays in state. one array includes the url and one includes the id
export const toggler = (id, url)  => {
  return {type: 'TOGGLE_VISIBILITY', id, url}
}

// checks to see if the two flipped cards are a match
export const pairIds = ()  => {
  return {type: 'CHECK_PAIR'}
}
