import { getUser } from '../../api/fakeApiUser'



export const FetchToken=(Token)=>{
  console.log('========================action',Token)
  return{
    type:'FETCH_TOKEN',
    Token
  }
}
// export const Delete_User = () => {
//   return {
//     type: 'DELETE_USER'
//   }
// }
export const fetchUserSuccess = user => {
  console.log('========================USER',user)
  return {
    type: 'FETCH_USER_SUCCESS',
    user
  }
}
export const Songs_Levels_ = Levels => {
  console.log('========================Songs_Levels',Levels)
  return {
    type: 'FETCH_SONGS_LEVELS_SUCCESS',
    Levels
  }
}
export const Story_Levels = Levels => {
  console.log('========================StoryLevels',Levels)
  return {
    type: 'FETCH_STORY_LEVELS_SUCCESS',
    Levels
  }
}

export const fetchUserFail = () => {
  return {
    type: 'FETCH_USER_FAILED'
  }
}

export const fetchDataUser = () => async dispatch => {
  try {
    dispatch(fetchUserRequest())
    const { data } = await getUser()
    dispatch(fetchUserSuccess(data))
  } catch (error) {
    dispatch(fetchUserFail())
  }
}
