import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div className="navigation">
            <div className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">
                            <p className="nav-item-index bold">1</p>
                        </Link>
                        <div className="nav-item-label">
                            <p className="light">step 1</p>
                            <p className="bold">your info</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="selectPlan">
                            <p className="nav-item-index bold">2</p>
                        </Link>
                        <div className="nav-item-label">
                            <p className="light">step 2</p>
                            <p className="bold">select plan</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="addOns">
                            <p className="nav-item-index bold">3</p>
                        </Link>
                        <div className="nav-item-label">
                            <p className="light">step 3</p>
                            <p className="bold">add-ons</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="summary">
                            <p className="nav-item-index bold">4</p>
                        </Link>
                        <div className="nav-item-label">
                            <p className="light">step 4</p>
                            <p className="bold">summary</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
