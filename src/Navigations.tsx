import { Link } from "react-router-dom";

export default function Navigations(){
    return(<>
        <div className="NavigationMainDiv">
            <Link className="NavigationMainDivIntems" to="/FinalsPortfolio">Home</Link>
            <Link className="NavigationMainDivIntems" to="/FinalsPortfolio/About">About</Link>
            <Link className="NavigationMainDivIntems" to="/FinalsPortfolio/Contact">Contact</Link>
        </div>
    </>)
}