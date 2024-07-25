import React from 'react';

const Contact = () => (
    <section className="contact" id="contact">
        <div className="container">
            <h2 className="title" style={{ color: '#102C57', fontWeight: 800 }}>Contact Me</h2>
            <div className="contact-content df">
                <div className="column left">
                    <div className="text" style={{ color: '#102C57', fontWeight: 700 }}>Get in Touch</div>
                    <p>
                        I'm eager to connect and collaborate. Whether you have a project idea, a question, or just want to say hello, feel free to reach out. Let's create something amazing together!
                    </p>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head" style={{ color: '#102C57', fontWeight: 700 }}>Name</div>
                                <div className="sub-title">Mohamed Mohamed Mohamed Abdalfattah</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head" style={{ color: '#102C57', fontWeight: 700 }}>Address</div>
                                <div className="sub-title">Egypt , Beni Suef</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head" style={{ color: '#102C57', fontWeight: 700 }}>Email</div>
                                <a href="mailto:mohamed.m.abdalfattah@gmail.com"
                                    style={{ color: '#bea17e' }}>mohamed.m.abdalfattah@gmail.com</a></div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text" style={{ color: '#102C57', fontWeight: 700 }}>Message me</div>
                    <form action="mailto:m01126165016@gmail.com" method="POST" encType="text/plain">
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
                            <button type="submit" className="send-msg">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
