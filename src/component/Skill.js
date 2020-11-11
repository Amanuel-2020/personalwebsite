import React, { Component } from 'react';
import '../App.css';

class Skill extends Component {
    render() {
        return (

            <section class="skills" id="skill">
                <div class="max-width">
                    <h1 class="title">My Skills</h1>
                    <div class="skills-content">
                        <div class="column left">
                            <div class="text">My creative skills & experiences.</div>
                            <p>Experienced in building web applications using Node.js, Native PHP and PHP Framework like
                            Laravel also Python as a back end and basic HTML5, CSS and JavaScript as front end.
                            Database: MySQL, MongoDB, Microsoft SQL Server
                            Experienced in using React.js as a front end development library and Django as a server
                            framework.
                            Experienced in using web sockets for different communication purposes.
                            Experienced in building responsive web apps by writing custom CSS code
                            Experienced in building attractive websites using custom CSS code and libraries like Bootstrap
                            and Ant design.
                            Experienced in using both relational and object oriented database servers.
                            Problem solving with code and debugging a code efficiently.
                            Can apply different data structure algorithms using Python and C++.
                            Version Controls: GIT Can develop applications in both Linux and Windows Platforms. </p>
                            <a href="#">Download CV</a>
                        </div>
                        <div class="column right">
                            <div class="bars">
                                <div class="info">
                                    <span>HTML</span>
                                    <span>90%</span>
                                </div>
                                <div class="line html"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>CSS</span>
                                    <span>60%</span>
                                </div>
                                <div class="line css"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>JavaScript</span>
                                    <span>80%</span>
                                </div>
                                <div class="line js"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>PHP</span>
                                    <span>50%</span>
                                </div>
                                <div class="line php"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>MySQL</span>
                                    <span>70%</span>
                                </div>
                                <div class="line mysql"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skill;

