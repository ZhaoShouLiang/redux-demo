
function postComments(state = [], action) {
  switch(action.type){
    case 'AAA':
      return [...state, action.data];
    default:
      return state;
  }
}

function commentReducer(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default commentReducer;
