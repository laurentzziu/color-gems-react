import React, { Component } from 'react';
import autoBind from 'react-autobind';

import { settings } from '../settings';

import Header from './Header';
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
    colorHex: true
  }

  render() {
    return (
      <div id="app-wrapper" className="container mt-5">
        {/* <Banner > */}
        <Header />
          <main>
            <ColorGems colors={ settings.colors }/>
          </main>
        <Footer />
      </div>
    );
  }
}

export default App;
