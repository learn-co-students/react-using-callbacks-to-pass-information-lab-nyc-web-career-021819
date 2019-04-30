import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }


  handleCellClick = (e) => {
    this.setState({
      color: this.props.selectedColor

    })
  }


  render() {
    return (
      <div
        className="cell"
        onClick={this.handleCellClick}
        style={{backgroundColor: this.state.color}}
      >
      </div>
    )
  }

}
