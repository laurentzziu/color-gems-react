import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { rgba2hex } from '../helpers';

export default class ColorGem extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  render() {
    return (
      <div style={{backgroundColor: this.props.color}} className="m-3 color-box d-flex flex-wrap">
        <div className="color-box-variation" aria-label="Copy"></div>
      </div>
    );
  }
}
