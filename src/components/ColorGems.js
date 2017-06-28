import React, { Component } from 'react';
import autoBind from 'react-autobind';

import ColorGem from './ColorGem';

export default class ColorGems extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  render() {
    const colors = this.props.colors;

    return (
      <div className="color-gems-container d-flex flex-wrap justify-content-center mt-5">
      { colors.map((color, index) => {
        return <ColorGem
                  key={`color-gem-${index}`} color={color}
                  copiedToClipboard={this.props.copiedToClipboard}
                  colorHex={this.props.colorHex}
                />
      })}
      </div>
    );
  }
}
