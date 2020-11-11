
import React, {Component} from 'react';

import '../App.css';


class Service extends Component {
    render(){
        return(
            <section class="services" id="service">
               <div class="max-width">
                <h2 class="title">My Services</h2>
                <div class="serv-content">
                    <div class="card ">
                        <div class="box">
                            <i class="fa fa-paint-brush"></i>
                            <div class="text">Web Design</div>
                            <p>As a freelance web designer, I put thought and heart into every web design project. I love designing websites that stand out from the rest.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <i class="fa fa-anchor"></i>
                            <div class="text">Search Engine Optimization</div>
                            <p>The optimization of your website is the first step to an efficient SEO. Search Engines have specific rules to read your website and rate it. We handle the optimization for your website to make it search engines friendly and help you rank higher easier.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <i class="fa fa-anchor"></i>
                            <div class="text">Web Developer</div>
                            <p>I am passionate about designing and developing user-friendly websites. I have all the skills to create a new high quality website or improve existing websites for individuals and organisations</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <i class="fa fa-code"></i>
                            <div class="text">Mobile Apps</div>
                            <p>I am passionate about designing and developing user-friendly I am passionate about designing and developing user-friendly Mobile Apps.</p>
                        </div>
                    </div>
                   </div>
                </div>
                </section>
            
        )
    }
}

export default Service;
