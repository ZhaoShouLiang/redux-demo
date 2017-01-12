import React from 'react';
import { connect } from 'react-redux';
import store from './store.js';

class PostBody extends React.Component{
  handleClick(postId) {
    store.dispatch({type: 'INCREMENT_LIKES', index: postId - 1})
  }
   render(){
     console.log('222222222' + this.props.comments);
     console.log('55555555'  +this.props.postId);
     console.log('66666' + this.props.posts[this.props.postId - 1]);
     return(
       <div className="postBody">
         <div className='title'>
           {this.props.posts[this.props.postId -1].title}
         </div>
         <span className="commentsNum">{ this.props.comments[this.props.postId].length }</span>
          <div className="likesNum" onClick={this.handleClick.bind(this, this.props.postId)}>
            {this.props.posts[this.props.postId -1].likes}
          </div>

       </div>
     )
   }
 }
const mapStateToProps = (state) =>(
  {
    comments:state.comments,
    posts:state.posts
  }
)
export default connect(mapStateToProps)(PostBody)
