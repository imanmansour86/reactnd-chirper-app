import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboad'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
}

  render() {
    return (
      <div>
        {this.props.loading === true ? null : <Dashboard/> } 
       
      </div>
    )
  }
}

//mapStateToProps(state, [ownProps]) - authedUser state inside the store 
function mapStateToProps({authedUser}) { 
  return {
    loading: authedUser === null 
  }
}

export default connect(mapStateToProps)(App) //connect() function upgrades a component to a container