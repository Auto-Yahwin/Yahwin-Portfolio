import "./index.css"

export default function ProjectsCard(props) {

    const txtGrp = {
        paddingLeft: "1.2rem"
    }
    
    return(
                <div className={`
                    ${props.mappedIndex === props.selectedIndex ? " selected" : ""}
                    ${props.grid ? "project-cards-grid" : "project-cards-list"}
                `} onClick={()=>{props.handleClick(props.id); props.setSelectedIndex(props.mappedIndex)}} >
                    <div className="text-grp" /*style={props.toGridOrList ? txtGrp : null}*/>
                        <h1 className="blue-h">{props.name}</h1>
                        {(props.viewPort<="750" && props.grid) && <img src={props.selectedData === "Frontend" ?
                            `${import.meta.env.BASE_URL}${props.images[0]}` :
                            `${import.meta.env.BASE_URL}${props.images[3]}`}
                        alt="" className={props.grid ? "grid-card-list-img" : "list-card-list-img"} /*style={props.grid ? gridImage : null}*/ />}
                        {/*props.repo && /*<p className="orange-span">{props.category}</p>*/
                        <div className="tools">
                            {[...props.tools, ...props.category].map((value, key)=>(
                                <div className="text-holder" key={key}>
                                    <h2>{value}</h2>
                                </div>
                            ))}
                        </div>
                        }

                    </div>
                    
                        {(props.viewPort>750 || (props.viewPort<=750 && !props.grid)) && <img src={props.selectedData === "Frontend" ?
                            `${import.meta.env.BASE_URL}${props.images[0]}` :
                            `${import.meta.env.BASE_URL}${props.images[3]}`}
                        alt="" className={props.grid ? "grid-card-list-img" : "list-card-list-img"} />}
                </div>
            )
}