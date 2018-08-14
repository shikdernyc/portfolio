import React, {Component} from 'react'
import ScrollReveal from 'scrollreveal'

class Contact extends Component{
    
    componentDidMount(){
        ScrollReveal().reveal('#contact-left', {distance: '300px', origin: 'left', duration: 1000})
        ScrollReveal().reveal('#contact-right', {distance: '300px', origin: 'right', duration: 1000})
        ScrollReveal().reveal('#contact h3', {distance: '300px', origin: 'top', duration: 1000})
    }

    render(){
        return (
            <section id="contact" className="my-5">
                <div className="container">
                    <h3 className="text-center mb-4">Let's get in Touch!</h3>
                    <form action="mailto:shikdernyc@gmail.com.com" method="post" encType="text/plain">
                        <div className="form-row">
                            <div className="col mx-3" id="contact-left">
                                <div className="form-group">
                                    <label htmlFor="contact-name">Your name</label>
                                    <input type="text" className="form-control" id="contact-name" placeholder="Enter Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-email">Email Address</label>
                                    <input type="email" className="form-control" id="contact-email" placeholder="Enter Email Address" />
                                </div>	
                                <div className="form-group">
                                    <label htmlFor="contact-subject">Subject</label>
                                    <input type="text" className="form-control" id="contact-subject" placeholder="Enter Email Subject" />
                                </div>
                            </div>
                                <div className="col" id="contact-right">
                                <div className="form-group">
                                    <label htmlFor="description"> Message</label>
                                    <textarea className="form-control" id="description" rows="6" placeholder="Enter Your Message" defaultValue={""} />
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary submit"><i className="fa fa-paper-plane" aria-hidden="true" />  Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact