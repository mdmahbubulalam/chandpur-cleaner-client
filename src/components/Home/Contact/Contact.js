import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="container py-5 my-5" id="contact">
            <div className="row">
                <div className="text-center">
                    <div className="py-3">
                        <h5 className="text-uppercase font-color">Contact</h5>
                    </div>
                    <div className="col-md-9 mx-auto">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control input-bg" placeholder="Name *"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control input-bg" placeholder="Email Address *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control input-bg" placeholder="Subject *"/>
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control input-bg" cols="30" rows="10" placeholder="Message *"></textarea>
                            </div>
                            <div className="form-group text-center">
                                <button type="button" className="btn btn-warning">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;