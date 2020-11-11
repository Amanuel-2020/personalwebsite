import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
class Navbar extends Component{
    render(){
        return(
    <div>
     <nav>
     <Link href="/" class="logo"><img className="logos" src="/image/aw.png" alt="logo" width="50" height="50"/></Link>
     <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down ">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#work">My Work</a></li>
        <li><a href="#contact">Contact Us</a></li>
        
      </ul>
     </nav>
  <ul class="sidenav" id="mobile-demo">
      <br/><br/><br/><br/><br/>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About Us</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#work">My Work</a></li>
        <li><a href="#contact">Contact Us</a></li>
       
  </ul>
    </div>
        )
    }
}
export default Navbar;