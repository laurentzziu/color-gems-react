import React, { Component } from 'react';
import autoBind from 'react-autobind';

import Switch from 'antd/lib/switch';
import 'antd/lib/switch/style/css';

import Icon from 'antd/lib/icon';

export default class Filters extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  render() {
      return (
      <div id="filters-wrapper" className="mb-3 mt-5 d-flex justify-content-center">
        <div id="color-mode">
          <span className="mr-2">RGBa</span>
          <Switch
            defaultChecked={this.props.isHex}
            onChange={(value) => this.props.changeColorModeToHex(value)}
          />
          <span className="ml-2">Hex</span>
          <span className="mx-5"></span>
          <span className="mr-2"><Icon type="bars" style={{color: '#999'}}/></span>
          <Switch
            defaultChecked={this.props.isDisplayGrid}
            onChange={(value) => this.props.changeDisplayModeToGrid(value)}
          />
          <span className="ml-2"><Icon type="appstore-o" style={{color: '#999'}}/></span>
        </div>
      </div>
    )
  }
}
