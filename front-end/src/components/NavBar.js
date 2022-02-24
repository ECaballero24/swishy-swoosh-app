import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navBar">
           
           <div><Link to="/"><h3>SWISHY SWOOSH</h3></Link></div>
            
          
            {/* <div className="navButtons"> */}
        
              <div><Link to="/sneakers">VIEW ALL SNEAKERS</Link></div>    
              <div><Link to="/sneakers/new">NEW SNEAKER</Link></div>     
            
            {/* </div> */}
        </nav>
    )
}