import React, { Component } from 'react';
import autoBind from 'react-autobind';
import tinyColor from 'tinycolor2';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class ColorGem extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  renderVariationsBoxes(times = 9) {
    let boxes = [];
    for(let i = 1; i <= times; i++) {
      let color = this.boxColor();

      if (i < times / 2 ) {
        color = tinyColor(color).lighten((times - i) * 2).toString();
      } else if (i > (times + 1) / 2) {
        color = tinyColor(color).darken((times - i) * 2).toString();
      }

      let style = {
        backgroundColor: color
      }

      boxes.push(
        <div key={`color-box-variation-${i}`} style={style}
          className="color-box-variation" aria-label="Copy"
          onMouseEnter={() => this.props.updateHoverColor(tinyColor(color).toHexString())}>
        </div>
      )
    }
    return boxes;
  }

  boxColor() {
    // Color is stored as RGB
    let color = this.props.color;
    if (this.props.colorHex) {
      color = tinyColor(this.props.color).toHexString();
    }
    return color;
  }

  render() {
    const color = this.boxColor();
    const tColor = tinyColor(color);

    let boxStyle = {
      backgroundColor: color,
      boxShadow: `0 10px 18px -15px ${tColor.setAlpha(0.2).toHexString()},
                  0px 6px 51px -7px ${tColor.setAlpha(0.6).toHexString()}`
    }

    return (
      <CopyToClipboard onCopy={this.props.copiedToClipboard} text={color}>
        <div style={boxStyle} className="m-4 color-box d-flex flex-wrap">
          { this.renderVariationsBoxes() }
        </div>
      </CopyToClipboard>
    );
  }
}
