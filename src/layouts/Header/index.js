import React from "react";
import {NavLink } from 'react-router-dom';
import './style.css'

function Header(){
  
    return(
      <>
      <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink className="about-link"  to="/about">About</NavLink>
            <NavLink className="projects-link" to="/projects">Projects</NavLink>
            <img class="myImage"></img>
            </>
      
      )
}

/*

import ScriptTag from 'react-script-tag';

 new CircleType(document.getElementById('wrapper'))
.radius(384);

<ScriptTag isHydrating={true} type="text/javascript src="https://cdnjs.cloudfare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></ScriptTag>
  <ScriptTag src='circletype.min.js'></ScriptTag>

      <div id="wrapper"></div>
/*
<svg viewBox="0 0 500 500">
        <path id ="curve" d="M180.2,180.6c0-6.1,70.5-96.8,200.6-95.6c111.3,1.2,170.8,90.3,250.1,97"/>
        <text className="txtcolor" width="700">
            <textPath             xlinkHref="#curve">
                 <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink className="about-link"  to="/about">About</NavLink>
            <NavLink className="projects-link" to="/projects">Projects</NavLink>
            </textPath>
            </text>    
            </svg>

            **/

export default Header;
