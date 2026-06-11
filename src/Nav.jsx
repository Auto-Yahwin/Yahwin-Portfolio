import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Nav(props) {
    
    return(
        <nav className={props.darkMode ? "darkMode-nav" : ""}>
                {props.viewPort > 750 && <select name="" id="">
                    <option value="">Developer</option>
                    <option value="">Engineer: CAD, FEA, Aerospace</option>
                </select>}
                <h1 className={props.viewPort<="750"? "null":"blue-h"}>WELCOME TO MY PORTFOLIO PAGE</h1>
                <div className="nav-btn-grp">
                    <a href="#projects"><button>Projects</button></a>
                    <a href="#hire"><button>Hire Me</button></a>
                    <button onClick={()=>props.setDarkMode(prev=>!prev)}><FontAwesomeIcon icon={props.darkMode ? faSun : faMoon} /></button>
                </div>
            
        </nav>
    )
}