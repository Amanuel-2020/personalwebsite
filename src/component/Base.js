import React, {Component} from'react';
import Header from './Header';
import About  from './About';
import Service from'./Service';
import Skill from './Skill';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Work from './Work';
class  Base extends Component{
    render(){
        return(
            <div className="container-fluid">
                <Navbar/>
                <Header/>
                <div className="container-fluid">
                 <About/>
                </div>
                <div className="container-fluid">
                 <Service/>
                </div>
                <div className="container-fluid">
                 <Skill/>
                </div>
                <div className="container-fluid">
                <Work/>
                </div>
                <div className="container-fluid">
                <Contact/>
                </div>
                <Footer/>
                
            
            </div>
        )
    }
}

export default Base;