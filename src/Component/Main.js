import React from "react";
import Linearsearch from "./Linearsearch"
import { Link } from "react-router-dom";
const Main=()=>{
    return(
     <>
     <div className="Frontpage">
        <div><h1 className="Headfont">Algorithmic Visulaziser</h1></div>
        
        <div className="boxes">
            <div className="btn">
                
               <button style={{background:'#F3D0D7'}}><Link to="linearsearch">Linear Search</Link></button>
            </div>
            <div className="btn">
               <button style={{background:'#F3D0D7'}}><Link to="bubblesort">Bubble Sort</Link></button>
            </div>
            <div className="btn">
               <button style={{background:'#F3D0D7'}}><Link to="backtracking">Backtracking</Link></button>
            </div>
        </div>
     </div>
     </>
    );
}
export default Main;