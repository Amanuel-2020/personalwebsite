import React, { Component } from 'react';
import '../App.css';


class About extends Component {
    render() {
        return (

            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src="/image/photo5778305793400092317.jpg" alt="" />
                        </div>
                        <div class="column right">
                            <div class="text">I'm Amanuel and I'm a <span class="typing-2"></span></div>
                            <p>Hi! My name is AMANUEL WAKSHUM. I am a Web Developer, I have a love of Web Development and IT in general that I bring to all my work.
                                 I am meticulous and am always learning more about my field to both stay current and to expand on my skills. I have about one years of experience working in this field plus a couple more years setting up websites and doing programming while I was learning, I have a real love of IT and Web Development. I find the whole field endlessly fascinating. I have a problem-solving attitude so bring on your problems and I will get them fixed.</p>
                            <a href="/image/Lakk1.docx" target="" download>Download CV</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
