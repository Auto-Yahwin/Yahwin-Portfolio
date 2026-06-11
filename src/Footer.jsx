import InterestForm from "./InterestForm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin, faGithub, faReact, faJs } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer(props) {
    return(
        <>
        <section className={props.darkMode ? "darkMode" : ""} id="hire">
            <InterestForm />
            <div className="contact" id="contact">
                <h1 className="blue-h">Get In Touch</h1>
                <div className="socials">
                    
                    <a href="https://wa.me/2348101299724" target="_blank" rel="noopener noreferrer">
                        <button>{/*<FontAwesomeIcon icon={faWhatsapp} className="fa-icons" />*/}
                            <span className="white-span">{<img src="/Images/Icons/whatsapp.png" alt="whatsapp logo" className="icon-imgs" />}</span></button>
                    </a>
                    <a href="https://www.linkedin.com/in/solomon-okon-9822431b1" target="_blank" rel="noopener noreferrer">
                        <button>{/*<FontAwesomeIcon icon={faLinkedin} />*/}
                            {<img src="/Images/Icons/linkedin.png" alt="linkedin logo" className="icon-imgs" />}</button>
                    </a>
                    <a href="mailto:solomonyahwin@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button>{<FontAwesomeIcon icon={faEnvelope} className="fa-icons" />}
                        {/*<img src="/Images/Icons/mail.png" alt="mail logo" />*/}</button>
                    </a>
                    <a href="http://github.com/Auto-Yahwin" target="_blank" rel="noopener noreferrer">
                        <button><FontAwesomeIcon icon={faGithub} className="fa-icons" /></button>
                    </a>
                    
                </div>
            </div>
        </section>
        <footer className={props.darkMode ? "darkMode" : ""}>
            <p>@2026 Portfolio Page - Solomon Yahwin</p>
        </footer>
        </>
    )
}