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
    return (
      <div
        id="header-banner"
        style={{backgroundColor: color}}>
        { color }
      </div>
    )
  }
}
