import React from 'react';
import './Header.css';
import './Dust.css';
import Campfire from './Campfire';


const Header = props => {
    return (
      <header>
        <div id="dust-main">
        <div className="bg-animation">
        <div className="moon"/>
          <div id='stars'></div>
					<div id='stars2'></div>
					<div id='stars3'></div>
					<div id='stars4'></div>
          <Campfire/>
        </div>
        </div>
      </header>
    );
  };

export default Header;