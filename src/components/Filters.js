import React, { Component } from 'react';
import autoBind from 'react-autobind';

import Switch from 'antd/lib/switch';
import 'antd/lib/switch/style/css';

export default class Filters extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  render() {
    const isHex = this.props.isHex;

    return (
      <div id="filters-wrapper" className="mb-3 mt-5 d-flex justify-content-center">
        <div id="color-mode">
          <span className="mr-2">RGBa</span>
          <Switch
            defaultChecked={this.props.isHex}
            onChange={(value) => this.props.changeColorModeToHex(value)}
          />
          <span className="ml-2">Hex</span>
        </div>
      </div>
    )
  }
}
