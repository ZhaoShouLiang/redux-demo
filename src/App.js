import React from 'react';
import { Link } from 'react-router';
import './main.css';
import Post from './Post';
import Home from './Home';

class App extends React.Component{
   render(){
     return(

         <div>
           <Link to='/post'>Post</Link>
           <Link to='/home'>Home</Link>

          {this.props.children}
         </div>

     )
   }
 }
export default App;
