import "./index.css"
import ProductsCard from "./ProjectsCard"
import DisplayColumn from "./DisplayColumn"
import { createPortal } from "react-dom"
import { useState } from "react"
import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGridHorizontal, faGridVertical, faList } from '@fortawesome/free-solid-svg-icons'

export default function MainColumn(props) {

    const [selectedData, setSelectedData]=useState("Frontend")
    const [theObj, setTheObj]=useState({})
    const [grid, setGrid]=useState(true)
    const [selectedIndex, setSelectedIndex]=useState(null)
    const [showModal, setShowModal]=useState(false)

    /*let gridStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem"
    }*/
   
    let placeHolder = grid ? "List" : "Grid"

    function Select(event) {
        setSelectedData(event.target.value)
        closeDisplay()
        //alert(selected)
    }

    function next() {
        selectedData === "Frontend" ? setSelectedData("CAD") : setSelectedData("Frontend")
        closeDisplay()
    }

    let data = selectedData === "Frontend" ? props.frontendData : props.cadData

    /*useEffect(() => {
        theObj ? setIndex(data.indexOf(theObj)) : null
    }, [theObj, data])*/

    function castProjectInfos(id) {
        //alert("it worked!!!!")
        data.map(element=>{
            element.key === id ? setTheObj(element) : null
            //setGrid(false)
        })
        props.viewPort<="750" ? setShowModal(true) : null
    }

    function closeDisplay() {
        setTheObj({})
        //setGrid(true)
        setSelectedIndex(null)
        setShowModal(false)
    }

    function gridOrList() {
        setGrid(prevState=>!prevState)
    }

    //console.log(theObj.images);
    //console.log(props.darkMode)
    
    function Modal() {
        useEffect(()=>{
            document.body.style.overflow = "hidden"
            return ()=>{
                document.body.style.overflow = "auto"
            }
        }, [])

        return createPortal(
            <div className={`overlay ${props.darkMode ? "dark-overlay" : ""}`}>
                <DisplayColumn
                    //obj={theObj}
                    id={theObj.key}
                    name={theObj.name}
                    tools={theObj.tools}
                    category={theObj.category}
                    description={theObj.description}
                    repo={theObj.repo}
                    live={theObj.live}
                    closeDisplay={closeDisplay}
                    images={theObj.images}
                    selectedData={selectedData}
                    darkMode={props.darkMode}
                />
            </div>, document.body
        )
    }
    

    return(
        <div /*className="main-column" style={theObj.name ? gridStyle : null} */className={`
            ${(props.viewPort <= 750 && theObj.name) ? "fix" : (props.viewPort > 750 && theObj.name) ? "main-column main-column-grid" : "main-column"}
            ${props.darkMode ? "dark-main-column" : ""}
        `}
        id="projects">
            
            {(props.viewPort<=750 && showModal) && <Modal />}
            
            <div className="list-container">
                <div className="mini-nav">
                    <select value={selectedData} name="data-selector" id="data-selector" onChange={Select}>
                        <option value="Frontend">Frontend</option>
                        <option value="CAD">CAD</option>
                    </select>
                    <h5 className="small-h blue-h">Projects</h5>
                    <div className="control-btns">
                        <button onClick={gridOrList}>{placeHolder} <FontAwesomeIcon icon={grid ? faList : faGridVertical} /></button>
                        <button onClick={next}>Next</button>
                    </div>
                </div>
                
                {/*It is here. find a way to move this style into a class*/}
                
                <div className={`
                ${grid ? "scroll-container-grid" : "scroll-container-list"}
                ${theObj.name ? "grid-template-columns" : "list-template-columns"}
                `}>
                    {data.map((element, i)=>{
                    //props.setterFunction()
                    return (<ProductsCard
                                key={element.key}
                                id={element.key}
                                name={element.name}
                                images={selectedData === "Frontend" ? [element.images.desktop1, element.images.desktop2, element.images.mobile1, element.images.mobile2] : [element.images.front, element.images.side, element.images.top, element.images.iso]}
                                tools={element.tools}
                                category={element.category}
                                description={element.description}
                                repo={element.repo}
                                live={element.live}
                                selectedData={selectedData}
                                handleClick={castProjectInfos}
                                grid={grid}
                                selectedIndex={selectedIndex}
                                setSelectedIndex={setSelectedIndex}
                                mappedIndex={i}
                                viewPort={props.viewPort}
                    />)
                })}
                </div>
            </div>
            {(props.viewPort>750 && theObj.name) &&
            <DisplayColumn
                //obj={theObj}
                id={theObj.key}
                name={theObj.name}
                tools={theObj.tools}
                category={theObj.category}
                description={theObj.description}
                repo={theObj.repo}
                live={theObj.live}
                closeDisplay={closeDisplay}
                images={theObj.images}
                selectedData={selectedData}
            />
            }
        </div>
    )
}