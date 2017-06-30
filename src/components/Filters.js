import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class Filters extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  onChange(event) {
    // this.props.changeColorModeToHex(event.target.value === "true" ? true : false);
  }

  render() {
    const colorHex = this.props.colorHex;

    return (
      <div id="filters-wrapper" className="mb-3 mt-5 d-flex justify-content-center">
        <div className="btn-group" data-toggle="buttons" id="color-mode">
          <label className="btn btn-purple">
            <input
              type="radio"
              name="color-mode"
              onChange={(e) => this.onChange(e)}
              defaultChecked={colorHex}
              ref={(input) => this.rgbaValue = input}
              id="rgba"
            /> RGBa
          </label>
          <label className="btn btn-purple">
            <input
              type="radio"
              name="color-mode"
              onChange={(e) => this.onChange(e)}
              defaultChecked={colorHex}
              ref={(input) => this.hexValue = input}
              id="hex"
            /> Hex
          </label>
        </div>
      </div>
    )
  }
}
