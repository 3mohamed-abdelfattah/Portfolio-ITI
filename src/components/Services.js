import { BiVideo } from "react-icons/bi";
import { FaRegFilePowerpoint } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { AiFillApple } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import React from 'react';

const Services = () => (
    <section className="services" id="services">
        <div className="container">
            <h2 className="title" data-aos="zoom-in">My Services</h2>
            <div className="serv-content df">
                <div className="card" data-aos="flip-up">
                    <div className="box">
                        <i><AiFillAndroid /></i>
                        <div className="text">Android Developer</div>
                        <p>
                            I will develop innovative and effective Android applications
                            using the best tools and techniques.
                        </p>
                    </div>
                </div>
                <div className="card" data-aos="flip-up">
                    <div className="box">
                        <i><FaCode /></i>
                        <div className="text">MERN Developer</div>
                        <p><br />
                            I will develop a website using MERN Stack.<br /><br />
                        </p>
                    </div>
                </div>
                <div className="card" data-aos="flip-up">
                    <div className="box">
                        <i><AiFillApple /></i>
                        <div className="text">React Native Developer</div>
                        <p>
                            I will develop cross-platform applications using React Native,
                            providing a seamless experience on Android and iOS.
                        </p>
                    </div>
                </div>
                <div className="card" style={{ marginTop: '2%' }} data-aos="flip-down">
                    <div className="box">
                        <i><CgGym /></i>
                        <div className="text">Personal Trainer</div>
                        <p>
                            I will create a customized fitness plan and provide personal training sessions to help you
                            achieve your fitness goals.
                        </p>
                    </div>
                </div>
                <div className="card" style={{ marginTop: '2%' }} data-aos="flip-down">
                    <div className="box">
                        <i><FaRegFilePowerpoint /></i>
                        <div className="text">Presentation Creator</div>
                        <p>
                            I will create engaging and professional presentations tailored to your specific needs.
                        </p>
                    </div>
                </div>
                <div className="card" style={{ marginTop: '2%' }} data-aos="flip-down">
                    <div className="box">
                        <i><BiVideo /></i>
                        <div className="text">Video Editing</div>
                        <p>
                            I will creatively edit your videos using professional techniques
                            to meet your specific needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Services;
