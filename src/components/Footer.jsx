import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "./../data";
import { DataUpdateContext } from "./../data";

export function Footer() {
    const navigate = useNavigate();

    const data = useContext(DataContext);
    const setData = useContext(DataUpdateContext);

    const { active, personalInfo } = data;

    useEffect(() => {
        const goBack = document.getElementById("goBack");
        const next = document.getElementById("next");

        if (active.prev) {
            goBack.style.visibility = "visible";
        } else {
            goBack.style.visibility = "hidden";
        }
        if (active.next === "/thankYou") {
            next.textContent = "Confirm";
        } else {
            next.textContent = "Next Step";
        }

        function moveNext() {
            const { name, email, phone } = personalInfo;
            if (active.current == "/") {
                if (name && email && phone) {
                    next.classList.remove("inactive");
                    navigate(active.next);
                } else {
                    next.classList.add("inactive");
                }
            } else if (active.current == "/summary") {
                if (name && email && phone) {
                    next.classList.remove("inactive");
                    navigate(active.next);
                } else {
                    next.classList.add("inactive");
                }
            } else {
                next.classList.remove("inactive");
                navigate(active.next);
            }
        }
        function moveBack() {
            navigate(active.prev);
        }

        goBack.addEventListener("click", moveBack);
        next.addEventListener("click", moveNext);
        next.classList.remove("inactive");

        return () => {
            goBack.removeEventListener("click", moveBack);
            next.removeEventListener("click", moveNext);
        };
    }, [data]);

    return (
        <div className="footer container">
            <span className="btn light" id="goBack">
                Go Back
            </span>
            <span className="btn bold" id="next">
                Next Step
            </span>
        </div>
    );
}
