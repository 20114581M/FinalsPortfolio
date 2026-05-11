import { Link } from "react-router-dom";

export default function Navigations(){
    return(<>
        <div className="NavigationMainDiv">
            <Link className="NavigationMainDivIntems" to="/">Home</Link>
            <Link className="NavigationMainDivIntems" to="/About">About</Link>
            <Link className="NavigationMainDivIntems" to="/Contact">Contact</Link>
        </div>
    </>)
}