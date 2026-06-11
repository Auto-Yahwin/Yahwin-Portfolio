import Nav from "./Nav"
import Header from "./Header"
import MainColumn from "./MainColumn"
import Footer from "./Footer"
import frontEndData from "./frontend.json"
import cadData from "./CAD.json"
import "./App.css"
import { useState } from "react"
import { useEffect } from "react"

export default function App() {

  const [viewPort, setViewPort] = useState(window.innerWidth)
  const [frontDataWithId, setFrontDataWithId] = useState(
    ()=>{
      return frontEndData.map(element=>({...element, key: crypto.randomUUID()}))
    }
  )
  //console.log(viewPort);


  const [darkMode, setDarkMode]=useState(false)
    /*function idGiver() {
        setDataWithId(prev=>{
            let mod = prev.map(element=>{
                if (!element.key) {
                    
                    return {...element, key: crypto.randomUUID()}
                } else {
                    
                    return element
                }
            })
            //console.log(mod);
            
            return mod
        })
    }*/
   //console.log(dataWithId);

   useEffect(()=>{
    function Resize() {
      setViewPort(window.innerWidth)
      //console.log("Current width:", window.innerWidth);
    }
    window.addEventListener("resize", Resize)
    return () => {
      window.removeEventListener("resize", Resize);
    };
   }, [])

   const [cadDataWithId, setCadDataWithId] = useState(
    ()=>{
      return cadData.map(element=>({...element, key: crypto.randomUUID()}))
    }
  )
  //console.log(cadDataWithId);

  return(
    (viewPort > 750 && viewPort < 1024) || viewPort < 355 ?
    <div>
      Due to responsive issues, you can't access this site with your current device. Please use a mobile, laptop, or switch to desktop site
    </div>
    :
    <div className={darkMode ? "main-container dark-overlay" : "main-container"}>
      {/*<div style={{ position: "fixed", minHeight: "50vh", minWidth: "70vw", backgroundColor: "green", nset:"0"}}>...</div>*/}
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        viewPort={viewPort}
      />
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        viewPort={viewPort}
      />
      <MainColumn
        /*setterFunction={idGiver}*/
        frontendData={frontDataWithId}
        cadData={cadDataWithId}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        viewPort={viewPort}
      />
      <Footer
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  )
}