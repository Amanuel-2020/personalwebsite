import React, {Component} from 'react';

import '../App.css';


class Work extends Component {
    render(){
        return(
        <section class="teams" id="work">
         <div class="max-width">
         <h2 class="title">My Works</h2>
         <div class="carousel owl-carousel">
          <div className="card">
            <div className="box">
             <img src="/image/photo-1501471984908-815b996862f4.jpg" alt=""/>
             <div className="text">
                    Title 1
             </div>
             <p>Experienced in building web applications using Node.js</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
             <img src="/image/photo-1501471984908-815b996862f4.jpg" alt=""/>
             <div className="text">
                    Title 2
             </div>
             <p>Experienced in building web applications using Node.js</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
             <img src="/image/photo-1501471984908-815b996862f4.jpg" alt=""/>
             <div className="text">
                    Title 3
             </div>
             <p>Experienced in building web applications using Node.js.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
             <img src="/image/photo-1501471984908-815b996862f4.jpg" alt=""/>
             <div className="text">
                    Title 3
             </div>
             <p>Experienced in building web applications using Node.js</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
             <img src="/image/photo-1501471984908-815b996862f4.jpg" alt=""/>
             <div className="text">
                    Title 3
             </div>
             <p>Experienced in building web applications using Node.js.</p>
            </div>
          </div>
         </div>
         </div>
        </section>
        )
    }
}

export default Work;

