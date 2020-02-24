import React from 'react';
import './Header.css';
import './Dust.css';
import Campfire from './Campfire';


const Header = props => {
    return (
      <div>
        <div id="dust-main">
        <div className="bg-animation">
        <div className="moon"/>
        <div className="silhouette"/>
          <div id='stars'></div>
					<div id='stars2'></div>
					<div id='stars3'></div>
					<div id='stars4'></div>
          <Campfire/>
        </div>
        </div>

        <div className="container">
        <h1>
          <span className="line">Ben Mac Donagh</span>
          <br/><br/>
          <span className="line">Full Stack Engineer</span>
        </h1>
      </div>
      </div>
    );
  };

export default Header;