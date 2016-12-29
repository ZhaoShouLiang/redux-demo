import { createStore } from 'redux';
import rootReducer from './reducers';


let comments = {
  1 : ['aaa1', 'aaa1'],
  2 : ['ccc2', 'ccc2']
 }
let posts = [{
  id:1,
  title:'aaa'
},
{
  id:2,
  title:'bbb'
}]

const defauleState = {
  comments,
  posts
}

let store = createStore(rootReducer,defauleState);


console.log(store.getState());
export default store;
