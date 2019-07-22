import React, { Component } from "react";
import { connect } from 'react-redux'
import { defaultAction } from './actions'

class Homepage extends Component {
  componentDidMount(){
    console.log('ss',this.props)
    this.props.decrement()
  }
  render() {
    return (
      <div>
        <p>Welcome to React Demo {this.props.posts} </p>
      </div>
    );
  }
} 

const mapStateToProps = (state) => {
  return {
      posts: state.defaultReducer.msg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    decrement : () => {
      dispatch(defaultAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);