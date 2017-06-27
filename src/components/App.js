import React, { Component } from 'react';
import autoBind from 'react-autobind';

import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  render() {
    return (
      <div id="app-wrapper" className="container">
        {/* <Banner > */}
        <Header />
        <main></main>
        <Footer />
      </div>
    );
  }
}

export default App;
