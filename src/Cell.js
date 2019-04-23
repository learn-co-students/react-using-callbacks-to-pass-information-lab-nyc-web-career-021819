import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick=(e)=>{
    // let hex = e.target.style.backgroundColor
    // this.props.setSelectedColor(hex)
    console.log(this.props.getSelectedColor())
    // console.log(this.state);
    this.setState({
      color: this.state.color = this.props.getSelectedColor()
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
      </div>
    )
  }

}
