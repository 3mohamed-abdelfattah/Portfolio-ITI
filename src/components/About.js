import React from 'react';
import Me from '../images/me.jpg'

const About = () => (
    <section className="about" id="about">
        <div className="container">
            <h2 className="title" style={{ color: '#102C57', fontWeight: 700 }}>About Me</h2>
            <div className="about-content df">
                <div className="column left">
                    <img style={{ borderRadius: '50%', border: '5px solid #102C57' }} src={Me} alt="myPhoto" />
                </div>
                <div className="column right">
                    <div className="text">
                        {`I'm `}
                        <h2>Mohamed</h2><br />
                        and I'm a <span className="typing-2"></span>
                    </div>
                    <p>
                        a Cross-Platform Software Developer, from EGYPT. Seeking
                        internship opportunities or development projects to elevate my
                        skills in computer science and programming techniques, ready to
                        explore the challenges of modern technology. Beyond my
                        professional roles, I actively contribute to the open-source
                        community, showcasing extensive expertise in various tech domains
                        such as Android Native, Web Development, JavaScript, Kotlin, and
                        more. My journey reflects a commitment to continuous learning, and
                        I harbor a great ambition to further develop my skills in a
                        collaborative environment. Engaging with all facets of the
                        development lifecycle, my work is centered on crafting
                        user-focused, innovative solutions, and delivering clean code
                        through effective teamwork.
                    </p>
                    <div className="socialMedia">
                        <ul>
                            <li><a href="https://wa.me/+201101201745"><i className="fab fa-whatsapp"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/mohamed-devmaster/"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://github.com/3mohamed-abdelfattah"><i className="fab fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
