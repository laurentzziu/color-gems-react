import React, { Component } from 'react';
import autoBind from 'react-autobind';

import { settings } from '../settings';

import Header from './Header';
import HeaderBanner from './HeaderBanner';
import Footer from './Footer';
import ColorGems from './ColorGems';

class App extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  state = {
    // list or grid
    display: 'grid',
    colorHex: true,
    copied: false,
    hoverColor: '#ffffff',
    bannerVisible: false
  }

  copiedToClipboard(bool = true) {
    this.setState({ copied: bool });
  }

  updateHoverColor(color) {
    this.setState({ hoverColor: color });
    this.setBannerVisible();
  }

  changeColorModeToHex(value) {
    this.setState({colorHex: value});
  }

  setBannerVisible() {
    // if (timeout) {
    //   clearTimeout(timeout);
    // }
    this.setState({ bannerVisible: true });
    // let timeout = setTimeout(() => {
    //   this.setState({ bannerVisible: false });
    // }, 5000);
  }

  render() {
    return (
      <div id="app-wrapper" className="pt-5">
        <HeaderBanner
          color={this.state.hoverColor}
          visible={this.state.bannerVisible}
          colorHex={this.state.colorHex}
        />
        <div className="content-wrapper container mt-5">
          <Header
            colorHex={this.state.colorHex}
            changeColorModeToHex={this.changeColorModeToHex}
          />
            <main>
              <ColorGems colors={settings.colors}
                copiedToClipboard={this.copiedToClipboard}
                colorHex={this.state.colorHex}
                hoverColor={this.state.hoverColor}
                updateHoverColor={this.updateHoverColor}
              />
            </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
