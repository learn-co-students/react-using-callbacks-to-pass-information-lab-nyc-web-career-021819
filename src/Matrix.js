import React, { Component } from 'react';
import chromeBoi from './data.js';
import Cell from './Cell.js';
import ColorSelector from './ColorSelector.js';

export default class Matrix extends Component {
	constructor() {
		super();
		this.colorChange = this.colorChange.bind(this);
		this.state = {
			selectedColor: null
		};
	}

	colorChange(e) {
		this.setState({
			selectedColor: e.target.style.backgroundColor
		});
	}

	//making a row of cells
	genRow = (vals) => vals.map((val, idx) => <Cell key={idx} color={val} stateColor={this.state.selectedColor} />);

	//making a matrix of rows

	genMatrix = () =>
		this.props.values.map((rowVals, idx) => (
			<div key={idx} className="row">
				{this.genRow(rowVals)}
			</div>
		));

	render() {
		return (
			<div id="app">
				<ColorSelector action={this.colorChange} />
				<div id="matrix">{this.genMatrix()}</div>
			</div>
		);
	}
}

//passing in data
Matrix.defaultProps = {
	values: chromeBoi
};
