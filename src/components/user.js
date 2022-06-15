import React, { Component } from 'react'
import "./user.css";
class user extends Component {

    state ={
        isVisible:false
    }
    // constructor(props){
    //     super(props);
    //     this.state={
    //      isVisible:true

    //     }
    //  }

    onClickEvent = (e) =>{
      this.setState({
        isVisible:!this.state.isVisible
      })
        
    }
  render() {
     
    // Destructing
    const {isVisible}= this.state
    const {name,age,salary}= this.props;
    return (
      <div className='col-md-8 mb-4'>
        <div className='card'>
            <div className='card-header d-flex justify-content-between'>
                <h4 className='d-inline' onClick={this.onClickEvent}>{name}</h4>
            <i className='far fa-trash-alt' style={{cursor:"pointer"}}></i>
            </div>
            {
                isVisible ?<div className='card-body'>
                <p className='card-text'>Maas:{salary}</p>
                <p className='card-text'>Age:{age}</p>
               
                </div>: null
            }
            
        </div>
      </div>
    )
  }
}
export default user;