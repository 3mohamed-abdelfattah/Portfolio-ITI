import React from 'react';

const Home = () => (
    <section className="home" id="home">
        <div className="container">
            <div className="home-content">
                <div className="text-1" data-aos="zoom-in">Hello, Let me to introduce</div>
                <div className="text-2" data-aos="zoom-in">
                    Mohamed Mohamed
                </div>
                <div className="text-3" data-aos="zoom-in">
                    {`And I'm a `}
                    <span className="typing" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}></span>
                </div>
                <a href="#contact" data-aos="flip-down"><p className='bt_contact'>Contact me</p></a>
            </div>
        </div>
    </section>
);

export default Home;
