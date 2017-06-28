import React, { Component } from 'react';
import autoBind from 'react-autobind';
import tinyColor from 'tinycolor2';

export default class ColorGem extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  renderVariationsBoxes(times = 9) {
    let boxes = [];
    for(let i = 1; i <= times; i++) {
      const color = this.props.color;
      let boxColor = color;

      if (i < times / 2 ) {
        boxColor = tinyColor(color).lighten((times - i) * 2).toString();
      } else if (i > (times + 1) / 2) {
        boxColor = tinyColor(color).darken((times - i) * 2).toString();
      }

      let style = {
        backgroundColor: boxColor
      }

      boxes.push(
        <div key={i} style={style}
          className="color-box-variation" aria-label="Copy"></div>
      )
    }
    return boxes;
  }

  render() {
    const color = this.props.color;
    const tColor = tinyColor(color);

    let boxStyle = {
      backgroundColor: color,
      boxShadow: `0 10px 18px -15px ${tColor.setAlpha(0.2).toRgbString()},
                  0px 6px 51px -7px ${tColor.setAlpha(0.6).toRgbString()}`
    }

    return (
      <div style={boxStyle} className="m-3 color-box d-flex flex-wrap">
        { this.renderVariationsBoxes() }
      </div>
    );
  }
}
