import { createStore } from 'redux';
import rootReducer from './reducers';


let comments = {
  1 : ['aaa1', 'aaa1'],
  2 : ['ccc2', 'ccc2']
 }
let posts = [{
  id:1,
  title:'时间一直向前走，没有尽头，只有路口',
  likes:3
},
{
  id:2,
  title:'bbb',
  likes:6
}]

const defauleState = {
  comments,
  posts
}

let store = createStore(rootReducer,defauleState);


console.log(store.getState());
export default store;
