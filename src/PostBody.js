import React from 'react';
import { connect } from 'react-redux';
import store from './store.js';

class PostBody extends React.Component{

   render(){
     console.log(this.props.comments);
     console.log(this.props.postId);

     return(
       <div className="postBody">
         {this.props.postId}
         <span className="likeNum">{ this.props.comments[this.props.postId].length }</span>


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
