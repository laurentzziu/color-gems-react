import React, { Component } from 'react';
import autoBind from 'react-autobind';
import tinyColor from 'tinycolor2';

export default class HeaderBanner extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  render() {
    const color = this.props.color;
    const colorHex = this.props.colorHex;
    const displayColor = colorHex ? tinyColor(color).toHexString() : tinyColor(color).toRgbString();

    return (
      <div
        id="header-banner"
        style={{backgroundColor: color, opacity: this.props.visible ? '1' : '0'}}>
        { displayColor }
      </div>
    )
  }
}
