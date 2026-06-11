import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin, faGithub, faReact, faJs } from '@fortawesome/free-brands-svg-icons'
import { faCircle, faDownload, faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons'
import 'devicon/devicon.min.css'

export default function Header(props) {
    return(
        <header className={props.darkMode ? "darkMode" : ""}>
            {/*
            <div className="role">
                <h1>Frontend Developer</h1>
                    <ul>
                        <li>HTML</li><li>CSS</li><li>JavaScript</li><li>React</li>
                        <li>Git</li>
                    </ul>
            </div>
            */}
            <span className="active-status blue-p"><p>Open to opportunities - Involve me</p> <FontAwesomeIcon icon={faCircle} className="active-indicator" /></span>
            {props.darkMode ?
                <img src={`
                    ${import.meta.env.BASE_URL}Images/Captures/moon.png`}
                    className="moon" alt="rotating moon" /> :
                <img src={`
                    ${import.meta.env.BASE_URL}Images/Captures/sun3.webp"`}
                    className="sun" alt="sun" />}
            <img src={`
                ${import.meta.env.BASE_URL}Images/Captures/blimp.webp`}
                className="blimp" alt="Blimp" />
            <div className="header-descrip">
                <div className="left-descrip">
                    <span className="orange-span"><h1><i>Hi!!</i></h1></span>
                    <h2 className="medium-h">I'm <span className="orange-span">Solomon Yahwin</span></h2>
                    <h3 className="small-h blue-h">Frontend Developer & Aerospace Engineer</h3>
                    {/*<p>An Aerospace engineering graduate with interest in aerospace development, computer aided design (CAD), and engineering analysis, with foundation in aircraft systems, structures, and applied engineering principles. Seeking entry level or graduate opportunities in engineering and technical roles</p>*/}
                    <p className="blue-p">I build responsive web applications and design engineering systems{props.viewPort>"750" && <br />}using CAD and simulation tools</p>
                    <div className="about">
                        <div className="ul-right-descrip-div">
                            <div className='ul-resume-div'>
                                <ul>
                                    <li className='blue-h'>COMPETENCE</li>
                                    <li>{/*<FontAwesomeIcon icon={faReact} />*/}
                                        <img src={`${import.meta.env.BASE_URL}Images/Icons/React.png`} alt="react logo" className='skills-icons' /> React</li>
                                    <li>{/*<FontAwesomeIcon icon={faJs} /*style={{ color: "#f7df1e" }} />*/}
                                        <img src={`${import.meta.env.BASE_URL}Images/Icons/JavaScript.png`} alt="javascript logo" className='skills-icons' />JavaScript</li>
                                    <li>
                                        <img src={`${import.meta.env.BASE_URL}Images/Icons/sw.png`} alt="Solidworks logo" className='skills-icons' />SolidWorks</li>
                                    <li>
                                        <img src={`${import.meta.env.BASE_URL}Images/Icons/ansys.png`} alt="Ansys logo" className='skills-icons' />ANSYS</li>
                                </ul>
                                {props.viewPort<="750" && <div className="resume-div">
                                <h3>Resume</h3>
                                <span>
                                    <button className="preview" onClick={()=>window.open("/Documents/SOLOMON_YAHWIN_CV.pdf", "_blank")}><FontAwesomeIcon icon={faEye} />Preview</button>
                                    <a href="/Documents/SOLOMON_YAHWIN_CV.pdf" download><button className="download"><FontAwesomeIcon icon={faDownload} />Download</button></a>
                                </span>
                            </div>}
                            </div>
                            {props.viewPort<="750" && 
                            <div className="right-descrip">
                                <div className="right-descrip-grp">
                                    <img src={`${import.meta.env.BASE_URL}Images/solomon Yahwin Passport.jpeg`} alt="Solomon Yahwin" className="headshot" />
                                    <p className="blue-p"><b>Building Digital & Engineering Solutions</b></p>
                                    <div className="header-socials">
                                        <a href="https://wa.me/2348101299724" target="_blank" rel="noopener noreferrer">
                                            <button>{/*<FontAwesomeIcon icon={faWhatsapp} />*/}
                                            {<img src={`${import.meta.env.BASE_URL}Images/Icons/whatsapp.png`} alt="whatsapp logo" className="small-icon-imgs" />}</button>
                                        </a>
                                        <a href="https://www.linkedin.com/in/solomon-okon-9822431b1" target="_blank" rel="noopener noreferrer">
                                            <button>{/*<FontAwesomeIcon icon={faLinkedin} />*/}
                                            {<img src={`${import.meta.env.BASE_URL}Images/Icons/linkedin.png`} alt="linkedin logo" className="small-icon-imgs" />}</button>
                                        </a>
                                        <a href="mailto:solomonyahwin@gmail.com" target="_blank" rel="noopener noreferrer">
                                            <button><FontAwesomeIcon icon={faEnvelope} className='smaller-fa-icons' /></button>
                                        </a>
                                        <a href="http://github.com/Auto-Yahwin" target="_blank" rel="noopener noreferrer">
                                            <button><FontAwesomeIcon icon={faGithub} className='smaller-fa-icons' /></button>
                                        </a>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="about-paragraph">
                            <p className="blue-p">"An Aerospace engineering graduate with interest in aerospace development, web development, computer aided design (CAD), and engineering analysis, with foundation in aircraft systems, structures, and applied engineering principles. Seeking entry level or graduate opportunities in engineering and technical roles"
                            </p>
                            {props.viewPort>"750" && <div className="resume-div">
                                <h3>Resume</h3>
                                <span>
                                    <button className="preview" onClick={()=>window.open("/Documents/SOLOMON_YAHWIN_CV.pdf", "_blank")}><FontAwesomeIcon icon={faEye} />Preview</button>
                                    <a href="/Documents/SOLOMON_YAHWIN_CV.pdf" download><button className="download"><FontAwesomeIcon icon={faDownload} />Download</button></a>
                                </span>
                            </div>}
                        </div>
                    </div>
                    <div className="button">
                        <a href="#hire"><button className="dark-btn">Hire Me</button></a>
                        <a href="#contact"><button className="light-btn">Contact Me</button></a>
                    </div>
                </div>
                
                {props.viewPort>"750" && <div className="right-descrip">
                    <img src={`${import.meta.env.BASE_URL}Images/Captures/Rocket.gif`} alt="Rocket launched" className="rocket" />
                    
                    <div className="right-descrip-grp">
                        <img src={`${import.meta.env.BASE_URL}Images/solomon Yahwin Passport.jpeg`} alt="Solomon Yahwin" className="headshot" />
                        <p className="blue-p">Building digital & engineering solutions</p>
                        <div className="header-socials">
                            <button>{/*<FontAwesomeIcon icon={faWhatsapp} />*/}
                                {<img src={`${import.meta.env.BASE_URL}Images/Icons/whatsapp.png`} alt="whatsapp logo" className="small-icon-imgs" />}</button>
                            <button>{/*<FontAwesomeIcon icon={faLinkedin} />*/}
                                {<img src={`${import.meta.env.BASE_URL}Images/Icons/linkedin.png`} alt="linkedin logo" className="small-icon-imgs" />}</button>
                            <button><FontAwesomeIcon icon={faEnvelope} className='smaller-fa-icons' /></button>
                            <button><FontAwesomeIcon icon={faGithub} className='smaller-fa-icons' /></button>
                        </div>
                    </div>
                </div>}
            </div>
            <img src={`${import.meta.env.BASE_URL}Images/Captures/fly-along.png`} alt="flying aircraft" className="aircraft" />
            {props.viewPort<="750" && <img src={`${import.meta.env.BASE_URL}Images/Captures/Rocket.gif`} alt="Rocket launched" className="rocket" />}
        </header>
    )
}