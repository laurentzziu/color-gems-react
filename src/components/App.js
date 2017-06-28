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
    hoverColor: '#34e3e4'
  }

  copiedToClipboard(bool = true) {
    this.setState({ copied: bool });
  }

  updateHoverColor(color) {
    this.setState({ hoverColor: color });
  }

  render() {
    return (
      <div id="app-wrapper">
        <HeaderBanner color={this.state.hoverColor}/>
        <div className="content-wrapper container mt-5">
          <Header />
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
