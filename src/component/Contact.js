import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Contact extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            sent: false
        }
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    handlesubmit(e){
        e.preventDefault();
      const data = {
          name: this.state.name,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message
      }
      axios.post('http://localhost:5000/api/forma',data).then(res =>{
        this.setState({
          sent:true
        }, this.resetform())
      }).catch(() =>{
        console.log('message not send')
      })

    }

    resetform(){
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }
    render() {
        return (
            <section class="contact" id="contact">
                <div class="max-width">
                    <h2 class="title">Contact me</h2>
                    <div class="contact-content">
                        <div class="column left">
                            <div class="text">Get in Touch</div>
                            <div class="icons">
                                <div class="row">
                                    <i class="fa fa-phone"></i>
                                    <div class="info">
                                        <div class="head">Phone</div>
                                        <div class="sub-title">+251935299008</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fa fa-envelope"></i>
                                    <div class="info">
                                        <div class="head">Email</div>
                                        <div class="sub-title">amanuelwakshum@gmail.com</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fa fa-globe"></i>
                                    <div class="info">
                                        <div class="head">Website</div>
                                        <div class="sub-title">direegabaa.com</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fa fa-address-book"></i>
                                    <div class="info">
                                        <div class="head">Address</div>
                                        <div class="sub-title">Bole Summit,Finfinne,Ethiopia</div>
                                    </div>
                                </div>

                            </div>
                            <div class="wrapper">
                                <div class="button">
                                    <div class="icon">
                                        <i class="fa fa-facebook-f"></i></div>
                                    <span>Facebook</span>
                                </div>
                                <div class="button">
                                    <div class="icon">
                                        <i class="fa fa-twitter"></i></div>
                                    <span>Twitter</span>
                                </div>
                                <div class="button">
                                    <div class="icon">
                                        <i class="fa fa-instagram"></i></div>
                                    <span>Instagram</span>
                                </div>
                                <div class="button">
                                    <div class="icon">
                                        <i class="fa fa-github"></i></div>
                                    <span>Github</span>
                                </div>
                                <div class="button">
                                    <div class="icon">
                                        <i class="fa fa-youtube"></i></div>
                                    <span>YouTube</span>
                                </div>
                            </div>
                        </div>

                        <div class="column right">
                            <div class="text">Message me</div>
                            <form onSubmit={this.handlesubmit.bind(this)} method='post'>
                                <div class="fields">
                                    <div class="field name">
                                        <input type="text" placeholder="Name" required name="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
                                     </div> &nbsp;&nbsp;&nbsp;&nbsp;
                                     <div class="field email">
                                        <input type="email" placeholder="Email" required name="email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
                                    </div>
                                </div>
                                <div class="field">
                                    <input type="text" placeholder="Subject" required name="subject" value={this.state.subject} onChange={this.handleChange.bind(this)}/>
                                </div>
                                <div class="field textarea">
                                    <textarea cols="60" rows="30" placeholder="Message.." required name="message" value={this.state.message} onChange={this.handleChange.bind(this)}></textarea>
                                </div>
                                <div class="button">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        )
    }
}

export default Contact;
