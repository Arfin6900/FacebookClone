const initialState = {
  Token:null,
  user: [],
  _landOwner:[],
  _subAdmin:[],
  _songs_Level:[],
  _story_Level:[],

  // isLoading: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TOKEN': {
      console.log("===================================Get developemet",action.Token)
      return {...state,Token:action.Token};
    }
    case 'DELETE_USER':
      return {...state, Token: null};

    case 'FETCH_USER_SUCCESS':
      console.log("===================================User",action.user)
      return {
        ...state,
        user: action.user,
   
      }
      
      case 'FETCH_SONGS_LEVELS_SUCCESS':
        console.log("===================================Songs_Levels",action.Levels)
        return {
          ...state,
          _songs_Level: action.Levels,
     
        }
        case 'FETCH_STORY_LEVELS_SUCCESS':
          console.log("===================================Story_Levels",action.Levels)
          return {
            ...state,
            _story_Level: action.Levels,
       
          }

    default:
      return state
  }
}

export default userReducer
