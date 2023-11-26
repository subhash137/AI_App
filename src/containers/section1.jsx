import React from 'react'
import "./section1.css"
import {useState} from "react"
import { RiMenu3Line , RiCloseLine} from "react-icons/ri"

const Section1 = () => {
    const [menubar ,setMenuBar] = useState(false);

    const toggleMenuBar = (

        
        <div class = "sidebar">
   
            <div class = "section1">
            
                <button class = "train">Train Data</button>
                <button class = "test">Test Data</button>
                <button class = "model">Model</button>




            </div> 
    

    
  
        </div>  

    ) 

    

  return (
    <div class="open">{menubar ? <RiMenu3Line className = "menu-icon" onClick = {() => setMenuBar(!menubar)}/> :<RiCloseLine className = "menu-icon" onClick = {() => setMenuBar(!menubar)}/> }
        {menubar ? <React.Fragment>
            <div class = "close">
            
                {toggleMenuBar}
        </div></React.Fragment> : <React.Fragment>
            
            
                {toggleMenuBar}
        </React.Fragment>}



    </div>
    

        


     
  )
}

export default Section1
