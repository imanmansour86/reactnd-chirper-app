import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'

class Dashboard extends React.Component {


    render(){
        console.log(this.props)

        
        return (
            <div>
                <h3 className= 'center'>Your Timeline</h3>
                <ul className = 'dashboard-list'>
                 {this.props.tweetIds.map((id)=> (
                     <li key = {id}>
                         <Tweet id = {id}/>

                     </li>
                 ))}
                </ul>
            </div>


        )
    }
}
//mapStateToProps(state, [ownProps])  //ownProps from parent component
function mapStateToProps({tweets}) { //tweets state is the state inside the store 
    return {
        tweetIds: Object.keys(tweets)
        .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}


//To make componenet a  container, we need to make use the connect() function
export default connect(mapStateToProps)(Dashboard)