
function commentReducer(state = [], action) {

    switch (action.type) {
      case 'AAA':
        return [...state , action.data]
      default:
        return state
    }


}

export default commentReducer;
