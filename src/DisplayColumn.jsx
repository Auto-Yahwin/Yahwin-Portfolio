import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCancel, faX, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import "./index.css"
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import connectingRod from './assets/Exploded Connecting Rod.mp4'
import pelletizer1 from './assets/Pelletizer.mp4'
import pelletizer2 from './assets/Pelletizer motion.mp4'

export default function DisplayColumn(props) {
    //console.log(props.category);
    //continue from here.
    //share the object
    
    return(
        <div /*className={window.innerWidth>"750" && props.id ? "display-column" : "modal"}*/ className="display-column">
            <button className="close-display" onClick={props.closeDisplay}><FontAwesomeIcon icon={faClose} style={{color: "red"}} /></button>
            <div className="title">
                <h1>{props.name}</h1>
            </div>
            <div className="display-card">
                <div className="project-descrip">
                    {/*----------------YOU NEVER PUT DESCRIPTION FOR HERE OOOOOO--------------- */}
                    <p>{props.description}</p>
                </div>
                <div className="project-tools">
                    <h2>Tools</h2>
                    <div className="tools">
                        {props.tools.map((value, key)=>(
                            <div className="text-holder" key={key}>
                                <h2>{value}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="project-coverage">
                    <h2>Coverage</h2>
                    <div className="tools">
                        {props.category.map((value, key)=>(
                            <div className="text-holder" key={key}>
                                <h2>{value}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                {props.selectedData === "Frontend" &&
                    <div className="project-repo">
                        <h2>Repository</h2>
                        <a href={props.repo}>{props.repo}<FontAwesomeIcon icon={faExternalLinkAlt} style={{marginLeft: "10px"}} /></a>
                    </div>
                }
                {props.selectedData === "Frontend" &&
                    <div className="project-link">
                        <h2>Live Site</h2>
                        <a href={props.live}>{props.live}<FontAwesomeIcon icon={faExternalLinkAlt} style={{marginLeft: "10px"}} /></a>
                    </div>
                }
                {props.selectedData === "CAD" &&
                    <div className="project-repo">
                        <h2>CAD files</h2>
                        <a href="https://drive.google.com/file/d/1-1TJSjQdQiCW7Rw4DN0ao78qQh5DfgXV/view?pli=1" target="_blank" rel="noopener noreferrer">
                            https://drive.google.com/file/d/1-1TJSjQdQiCW7Rw4DN0ao78qQh5DfgXV/view?pli=1
                            <FontAwesomeIcon icon={faExternalLinkAlt} style={{marginLeft: "5px"}} />
                        </a>
                    </div>
                }
                
                <div className="project-images-div">
                    {Object.entries(props.images).map(([key,value])=>{

                        {/*-----why (value, key) and [key, value] ???----*/}

                        return(
                            <div key={key} className={key === "mobile1" || key === "mobile2" || key === "mobile3" ? "mobile-img-div" : "project-image-div"}>
                                <img src={value} alt="" />
                            </div>
                        )
                    })}
                </div>

                {props.name === "Pelletizer" &&
                <div className='video-wrapper'>
                    <video src={pelletizer1}
                        controls playsInline preload='metadata'
                    />
                    <video src={pelletizer2}
                        controls playsInline preload='metadata'
                    />
                </div>}

                {props.name === "Connecting Rod Assembly" &&
                <div className="video-wrapper">
                    <video src={connectingRod} controls playsInline preload='metadata'></video>
                </div>}

            </div>

        </div>
    )
}