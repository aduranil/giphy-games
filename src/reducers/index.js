import { combineReducers } from 'redux';

const initialState = {board: {}}
const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOARD':
      return {...state, board: action.data}
    default:
      return state;
  }
}

const pairsReducer = (state = {url:[],id:[]}, action) => {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return {...state, id: [...state.id,action.id], url: [...state.url,action.url]}
    case 'CHECK_PAIR':
      let url = state.url.slice()
      let id = state.id.slice()
      if (state.url.length % 2 === 0) {
        for (let i =0; i < state.url.length-1; i+=2) {
          if (state.id[i] !== state.id[i+1]) {
            url.splice(i,2)
            id.splice(i,2)
          }
        }
        return {...state, id: id, url: url}
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  board: boardReducer,
  pairs: pairsReducer
})

export default rootReducer;
