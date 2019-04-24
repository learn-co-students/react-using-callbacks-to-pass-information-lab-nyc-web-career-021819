import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {


  genRow = (vals) => (
    vals.map((val, idx) => <Cell state={this.state} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  state = {
    selectedColor: "#000"
  }


  setColor = (hex) => {
    console.log('fired with state:', hex)
    this.setState({selectedColor: hex})
  }

  render() {
    // console.log(this.setColor("#000"))
    // console.log("#000")
    // this.setColor("#000")
    return (
      <div id="app">
        <ColorSelector state={this.state} setColor={this.setColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
