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
    displayGrid: true,
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
    this.setState({isHex: value});
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
          isHex={this.state.isHex}
        />
        <div className="content-wrapper container mt-5">
          <Header
            isHex={this.state.isHex}
            changeColorModeToHex={this.changeColorModeToHex}
          />
            <main>
              <ColorGems colors={settings.colors}
                copiedToClipboard={this.copiedToClipboard}
                isHex={this.state.isHex}
                hoverColor={this.state.hoverColor}
                updateHoverColor={this.updateHoverColor}
                displayGrid={this.state.displayGrid}
              />
            </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
