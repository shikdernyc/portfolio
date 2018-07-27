import React, {Component} from 'react'

class Contact extends Component{

    render(){
        return (
            <section id="contact" className="my-5">
                <div className="container">
                    <h3 className="text-center mb-4">Let's get in Touch</h3>
                    <form>
                        <div className="form-row">
                            <div className="col mx-3">
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername">Your name</label>
                                    <input type="text" className="form-control" id placeholder=" Enter Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail">Email Address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail" placeholder=" Enter Email id" />
                                </div>	
                                <div className="form-group">
                                    <label htmlFor="telephone">Mobile No.</label>
                                    <input type="tel" className="form-control" id="telephone" placeholder=" Enter 10-digit mobile no." />
                                </div>
                            </div>
                                <div className="col mx-3">
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