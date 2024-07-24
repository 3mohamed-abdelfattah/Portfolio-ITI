import '../App.css'
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Work1 from '../images/FitWave.png';
import Work2 from '../images/BrandStep.png';
import Work3 from '../images/ToDo Wiz.png';
import Work4 from '../images/LittleLemon.png';
import Work5 from '../images/PizzaSlice.png';
import Work6 from '../images/calc.png';
import Work7 from '../images/CareHub.png';
import Work8 from '../images/chess.png';


const Work = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            const scrollUpBtn = document.querySelector('.scroll-up-btn');

            if (window.scrollY > 20) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }

            if (window.scrollY > 500) {
                scrollUpBtn.classList.add('show');
            } else {
                scrollUpBtn.classList.remove('show');
            }
        };

        window.addEventListener('scroll', handleScroll);

        const handleScrollUpClick = () => {
            window.scrollTo({ top: 0, behavior: 'auto' });
        };

        const scrollUpBtn = document.querySelector('.scroll-up-btn');
        scrollUpBtn.addEventListener('click', handleScrollUpClick);

        const navbarLinks = document.querySelectorAll('.navbar .menu li a');
        navbarLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.documentElement.style.scrollBehavior = 'smooth';
            });
        });

        const options = {
            strings: ["Freelancer !", "Designer !", "Developer !", "Athlete !"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        };

        const typed1 = new Typed(".typing", options);
        const typed2 = new Typed(".typing-2", options);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            scrollUpBtn.removeEventListener('click', handleScrollUpClick);
            // Destroy Typed.js instances on cleanup
            typed1.destroy();
            typed2.destroy();
        };
    }, []);

    return (

        <section className="teams" id="work">
            <div className="container">
                <h2 className="title">My Contributions</h2>
                <OwlCarousel
                    className="carousel"
                    loop
                    margin={20}
                    autoplay
                    autoplayTimeout={2700}
                    autoplayHoverPause
                    responsive={{
                        0: {
                            items: 1,
                            nav: false
                        },
                        600: {
                            items: 2,
                            nav: true
                        }
                    }}
                >
                    <div className="card">
                        <a href="https://github.com/3mohamed-abdelfattah/FitWave" style={{ color: 'white' }}>
                            <div className="box">
                                <img src={Work1} alt="FitWave" />
                                <div className="text">FitWave</div>
                                <p>
                                    Kotlin<br /><br />Explore a wide range of workout plans,
                                    personalized routines, and health tips designed to help to
                                    achieve your fitness goals 💪
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://github.com/3mohamed-abdelfattah/BrandStep" style={{ color: 'white' }}>
                            <div className="box">
                                <img src={Work2} alt="" />
                                <div className="text">BrandStep</div>
                                <p>
                                    Kotlin<br /><br />Ultimate E-Commerce App for purchasing the
                                    latest and most popular branded shoes and clothing 🛒
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://github.com/3mohamed-abdelfattah/ToDoWiz" style={{ color: 'white' }}>
                            <div className="box">
                                <img src={Work3} alt="" />
                                <div className="text">ToDo Wiz</div>
                                <p>
                                    Kotlin Multiplatform <br /><br />Ultimate Task Management App
                                    for tracking tasks, organizing your schedule, and staying
                                    productive 📃
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://github.com/3mohamed-abdelfattah/Little_Lemon_Project" style={{ color: 'white' }}>
                            <div className="box">
                                <img src={Work4} alt="" />
                                <div className="text">Little Lemon</div>
                                <p>
                                    Kotlin <br /><br />Restaurant App allows users to browse the
                                    menu and get information about the restaurant 🍉
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://github.com/3mohamed-abdelfattah/Restaurant_APP" style={{ color: 'white' }}>
                            <div className="box">
                                <img src={Work5} alt="" />
                                <div className="text">Pizza Slice</div>
                                <p>
                                    Flutter <br /><br />Restaurant App allows users to browse
                                    through a restaurant's menu, view details of each dish, and
                                    place orders 🍕
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://github.com/3mohamed-abdelfattah/Calculator" style={{ color: 'white' }}>
                            <div className="box">
                                <img src={Work6} alt="" />
                                <div className="text">Calculator</div>
                                <p>
                                    Kotlin <br /><br />Develop a simple calculator application
                                    using Kotlin that includes all Basic Arithmetic Operations 🧮
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://github.com/3mohamed-abdelfattah/CareHub" style={{ color: 'white' }}>
                            <div className="box">
                                <img style={{
                                    width: '495px',
                                    height: '255px',
                                    borderRadius: '0.5%'
                                }}
                                    src={Work7} alt="" />
                                <div className="text">CareHub</div>
                                <p>
                                    MERN Stack <br /><br />CareHub aims to seamlessly integrate
                                    various medical and healthcare specialties with cutting-edge
                                    technology <br /><br />🌐🚀<br /><br />
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://github.com/3mohamed-abdelfattah/Simple-Chess-Game" style={{ color: 'white' }}>
                            <div className="box">
                                <img style={{
                                    width: '445px',
                                    height: '235px',
                                    borderRadius: '0.5%'
                                }}
                                    src={Work8} alt="" />
                                <div className="text">Chess Game</div>
                                <p>
                                    Python <br /><br />Web Application To Play Chess With AI
                                    <br /><br /><br />♟️🤖<br /><br /><br />
                                </p>
                            </div>
                        </a>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    );
}

export default Work;
