import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()


    this.state = {
      stateColor: null
    }



  }

  updateStateColor = (e) => {
    this.setState({
      stateColor: e.target.style.backgroundColor
    })
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell currentStateColor = {this.state.stateColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector action={this.updateStateColor}/>
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
