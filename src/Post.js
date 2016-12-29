import React from 'react';
import PostBody from './PostBody';
import { Provider } from 'react-redux';
import store from './store';
import Work from './Work';
import './main.css';

class Post extends React.Component{
   render(){
     console.log(this.props.params.id);
     return(
       <Provider store={store}>
         <div>
            <div className="top">
              <PostBody postId={ this.props.params.id }/>
            </div>
            <div className="bottom">
              <Work postId={ this.props.params.id }/>
            </div>
         </div>
       </Provider>
     )
   }
 }
export default Post;
