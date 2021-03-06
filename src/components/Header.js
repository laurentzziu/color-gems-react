import React from 'react';
import Filters from './Filters';

const Header = (props) => {
  return (
    <header id="app-header" className="mt-5">
      <h2 className="text-center mb-0 mt-5">Color Gems</h2>
      <h4 className="text-center mt-2">Experiment</h4>
      <Filters
        isHex={props.isHex}
        changeColorModeToHex={props.changeColorModeToHex}
        changeDisplayModeToGrid={props.changeDisplayModeToGrid}
        isDisplayGrid={props.isDisplayGrid}
      />
    </header>
  )
}

export default Header;
