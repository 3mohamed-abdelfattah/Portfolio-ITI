import React from 'react';

const Contact = () => (
    <section className="contact" id="contact">
        <div className="container">
            <h2 className="title" style={{ color: '#102C57', fontWeight: 800 }} data-aos="zoom-in">Contact Me</h2>
            <div className="contact-content df">
                <div className="column left">
                    <div className="text" style={{ color: '#102C57', fontWeight: 700 }} data-aos="zoom-in">Get in Touch</div>
                    <p data-aos="fade-right">
                        I'm eager to connect and collaborate. Whether you have a project idea, a question, or just want to say hello, feel free to reach out. Let's create something amazing together!
                    </p>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user" data-aos="fade-right"></i>
                            <div className="info">
                                <div className="head" style={{ color: '#102C57', fontWeight: 700 }} data-aos="zoom-in">Name</div>
                                <div className="sub-title" data-aos="fade-right">Mohamed Mohamed Mohamed Abdalfattah</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt" data-aos="fade-right"></i>
                            <div className="info">
                                <div className="head" style={{ color: '#102C57', fontWeight: 700 }} data-aos="zoom-in">Address</div>
                                <div className="sub-title" data-aos="fade-right">Egypt , Beni Suef</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope" data-aos="fade-right"></i>
                            <div className="info">
                                <div className="head" style={{ color: '#102C57', fontWeight: 700 }} data-aos="zoom-in">Email</div>
                                <a href="mailto:mohamed.m.abdalfattah@gmail.com"
                                    style={{ color: '#bea17e' }} data-aos="fade-right">mohamed.m.abdalfattah@gmail.com</a></div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text" style={{ color: '#102C57', fontWeight: 700 }} data-aos="zoom-in">Message me</div>
                    <form action="mailto:mohamed.m.abdalfattah@gmail.com" method="POST" encType="text/plain" data-aos="fade-left">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.."></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit" className="send-msg" data-aos="flip-up">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
