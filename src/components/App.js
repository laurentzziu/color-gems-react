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
    isDisplayGrid: true,
    isHex: true,
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
    this.setState({ isHex: value });
  }

  changeDisplayModeToGrid(value) {
    this.setState({ isDisplayGrid: value })
  }

  setBannerVisible() {
    this.setState({ bannerVisible: true });
  }

  render() {
    return (
      <div id="app-wrapper" className="pt-5">
        <HeaderBanner
          color={this.state.hoverColor}
          visible={this.state.bannerVisible}
          isHex={this.state.isHex}
        />
        <div className="content-wrapper container mt-5">
          <Header
            isHex={this.state.isHex}
            changeColorModeToHex={this.changeColorModeToHex}
            changeDisplayModeToGrid={this.changeDisplayModeToGrid}
            isDisplayGrid={this.state.isDisplayGrid}
          />
            <main>
              <ColorGems colors={settings.colors}
                copiedToClipboard={this.copiedToClipboard}
                isHex={this.state.isHex}
                hoverColor={this.state.hoverColor}
                updateHoverColor={this.updateHoverColor}
                isDisplayGrid={this.state.isDisplayGrid}
              />
            </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
