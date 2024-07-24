import React from 'react';

const Home = () => (
    <section className="home" id="home">
        <div className="container">
            <div className="home-content">
                <div className="text-1">Hello, Let me to introduce</div>
                <div className="text-2" style={{ color: '#DAC0A3', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                    Mohamed Mohamed
                </div>
                <div className="text-3">
                    {`And I'm a `}
                    <span className="typing" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}></span>
                </div>
                <a href="#contact">Contact me</a>
            </div>
        </div>
    </section>
);

export default Home;
