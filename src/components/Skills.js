import React from 'react';

const Skills = () => (
    <section className="skills" id="skills">
        <div className="container">
            <h2 className="title" style={{ color: '#102C57', fontWeight: 800 }}>My Skills</h2>
            <div className="skills-content df">
                <div className="column left">
                    <div className="text" style={{ color: '#102C57', fontWeight: 700 }}>My Creative Skills & Experiences.</div>
                    <p>
                        <span style={{ color: '#102C57', fontWeight: 750 }}>Advanced in </span>Kotlin, JavaScript, React.js,
                        Android Kotlin Development,
                        HTML/CSS.<br />
                        <span style={{ color: '#102C57', fontWeight: 750 }}>Familiar with</span>
                        C++, OOP, Data Structures, Bootstrap, Flutter, Java, SQLite,
                        Figma, Python.<br /><span style={{ color: '#102C57', fontWeight: 750 }}>Soft Skills</span>
                        Communication, Teamwork, Creativity, Adaptability, Leadership,
                        Time Management, Attention to Detail, Continuous Learning,
                        Problem-Solving.<br />
                        <span style={{ color: '#102C57', fontWeight: 750 }}>Personal Skills </span>Adobe Premiere Pro (Video
                        Editing), Microsoft PowerPoint (Presentation Creation), Basic
                        Knowledge of Adobe Photoshop, Git.
                    </p>
                    <a href="#">Read more</a>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info"><span>Kotlin</span><span>90%</span></div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info"><span>JavaScript</span><span>85%</span></div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info"><span>React.js</span><span>85%</span></div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info"><span>HTML</span><span>95%</span></div>
                        <div class="line kotlin"></div>
                    </div>
                    <div class="bars">
                        <div class="info"><span>CSS</span><span>95%</span></div>
                        <div class="line kotlin"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Adobe Premiere</span><span>75%</span>
                        </div>
                        <div class="line bootstrap"></div>
                    </div>
                </div>
            </div>
        </div>
    </section >
);

export default Skills;
