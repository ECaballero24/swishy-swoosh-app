import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/"><h1>SWISHY SWOOSH</h1></Link>
            <div className="navButtons">
                <Link to="/sneakers"><button>VIEW ALL SNEAKERS</button></Link>
                <Link to="/sneakers/new"><button>NEW SNEAKERS</button></Link>
            </div>
        </nav>
    )
}