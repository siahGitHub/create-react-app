//import React from "react";
import React, { Component } from "react";


const Nav = props => (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    
        <a className="navbar-brand" href="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTThUsIWqHirIN5WOJA-Y1JhY9ndMoPGzitbh6xEl4eU9HpTQLZ" width="40%" height="40%" alt="Clicky App"/>
    </a>
      {/*  
    <div className ="nav-message ">{props.navMessage}</div>
    <div className ="nav justify-content-end nav-score">Score: {props.score}</div>
    <div className ="nav justify-content-endnav-high-score">High Score: {props.highScore}</div>
    */}
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
            <li className="nav-item px-2">
                <div className="nav-message">{props.navMessage}</div>
            </li>
            <li className="nav-item px-4">
                <div className="nav-score">Score: {props.score}</div>
            </li>
            <li className="nav-item px-4">
                <div className="nav-high-score">High Score: {props.highScore}</div>
            </li>
        </ul>
        </div>
    </nav>
);
    
export default Nav;