import React from 'react';
import store from './store.js'
class Work extends React.Component{
  constructor(props){
    super(props);
    console.log(store.getState().comments)

    this.state={
      comments: store.getState().comments[this.props.postId]
    }
    console.log("333333333333");
    console.log(this.state.comments);
    console.log("333333333333")

  }
  submitClick(e){
    e.preventDefault();
    let title = this.refs.title.value;
    let content = this.refs.content.value;


      store.dispatch({
        type: 'AAA',
        data: title + ' ： ' + content,
        postId: this.props.postId
      })
      console.log(store.getState());

      this.setState({comments:store.getState().comments[this.props.postId]});

    console.log(this.state.comments);
  }
   render(){
     console.log(this.state.comments);
     let text = this.state.comments.map((item,i) => <div className='comment' key={i}>{item}</div>)
     return(
       <div className="work">
         <div className="content">{text}</div>
          <form onSubmit={this.submitClick.bind(this)}>
            <input className="put" ref="title"/><br />
            <input className="put" ref="content"/><br />
            <button className="btn">评论</button>
          </form>
       </div>
     )
   }
 }
export default Work;
