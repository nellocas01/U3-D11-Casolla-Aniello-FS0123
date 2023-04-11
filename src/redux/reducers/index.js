import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE} from "../actions"

const initialState = {
  favourite: {
    list: [],
  }, 
  // search: {
  //   content: '' 
  // }
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      }
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      }
      // case SEARCH_WORK:
      //   return{
      //     ...state,
      //     search: {
      //       ...state.search,
      //       content: [...state.search.content, action.payload]
      //     }
      //   }
    default:
      return state
  }
}

export default mainReducer
