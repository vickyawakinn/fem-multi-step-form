import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../data";

export function Navigation() {
    const data = useContext(DataContext);

    const { active } = data;

    useEffect(() => {
        const navIndexes = document.querySelectorAll(".nav-item-index");

        (() => {
            navIndexes.forEach((element) => {
                element.classList.remove("selected");
                if (element.getAttribute("data-page") == active.current) {
                    element.classList.add("selected");
                }
            });
        })();

        function toggleSelectNavigation(e) {
            navIndexes.forEach((element) => {
                element.classList.remove("selected");
            });
            e.target.classList.add("selected");
        }

        navIndexes.forEach((item) => {
            item.addEventListener("click", toggleSelectNavigation);
        });

        return () => {
            navIndexes.forEach((item) => {
                item.removeEventListener("click", toggleSelectNavigation);
            });
        };
    }, [data]);

    return (
        <div className="navigation">
            <div className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">
                            <p
                                className="nav-item-index bold selected"
                                data-page="/"
                            >
                                1
                            </p>
                        </Link>
                        <div className="nav-item-label">
                            <p className="light">step 1</p>
                            <p className="bold">your info</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="selectPlan">
                            <p
                                className="nav-item-index bold"
                                data-page="/selectPlan"
                            >
                                2
                            </p>
                        </Link>
                        <div className="nav-item-label">
                            <p className="light">step 2</p>
                            <p className="bold">select plan</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="addOns">
                            <p
                                className="nav-item-index bold"
                                data-page="/addOns"
                            >
                                3
                            </p>
                        </Link>
                        <div className="nav-item-label">
                            <p className="light">step 3</p>
                            <p className="bold">add-ons</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="summary">
                            <p
                                className="nav-item-index bold"
                                data-page="/summary"
                            >
                                4
                            </p>
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
