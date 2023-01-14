import arcadeImg from "./../../assets/images/icon-arcade.svg";
import advancedImg from "./../../assets/images/icon-advanced.svg";
import proImg from "./../../assets/images/icon-pro.svg";
import { useContext, useEffect, useState } from "react";
import { DataUpdateContext } from "../../data";

export function SelectPlan() {
    const dataUpdate = useContext(DataUpdateContext);

    const [user, setUser] = useState({
        plan: "arcade",
        time: "monthly",
    });

    useEffect(() => {
        dataUpdate((prev) => {
            return {
                ...prev,
                active: {
                    prev: "/",
                    current: "/selectPlan",
                    next: "/addOns",
                },
            };
        });
    }, []);

    useEffect(() => {
        function planSelection() {
            selectPlanList.forEach((element) => {
                element.classList.remove("active");
            });
            this.classList.add("active");
            setUser((prev) => {
                return {
                    ...prev,
                    plan: this.getAttribute("data-plan"),
                };
            });
        }

        function toggleSlider(event) {
            event.target.classList.toggle("active");
            setUser((prev) => {
                return {
                    ...prev,
                    time: event.target.classList.contains("active")
                        ? "yearly"
                        : "monthly",
                };
            });
            if (event.target.classList.contains("active")) {
                document
                    .querySelectorAll("[data-yearly-benefits]")
                    .forEach((element) => {
                        element.style.display = "block";
                    });
                document.querySelector("[data-arcade-price]").textContent =
                    "$90/yr";
                document.querySelector("[data-advanced-price]").textContent =
                    "$120/yr";
                document.querySelector("[data-pro-price]").textContent =
                    "$150/yr";
            } else {
                document
                    .querySelectorAll("[data-yearly-benefits]")
                    .forEach((element) => {
                        element.style.display = "none";
                    });
                document.querySelector("[data-arcade-price]").textContent =
                    "$9/mo";
                document.querySelector("[data-advanced-price]").textContent =
                    "$12/mo";
                document.querySelector("[data-pro-price]").textContent =
                    "$15/mo";
            }
        }

        const selectPlanList = document.querySelectorAll(".selectPlanItem");
        selectPlanList.forEach((item) => {
            item.addEventListener("click", planSelection);
        });

        const sliderToggle = document.querySelector(".sliderToggleCircle");
        sliderToggle.addEventListener("click", toggleSlider);

        return () => {
            selectPlanList.forEach((item) => {
                item.removeEventListener("click", planSelection);
            });
            sliderToggle.removeEventListener("click", toggleSlider);
        };
    }, []);

    useEffect(() => {
        dataUpdate((prev) => {
            return { ...prev, plan: user };
        });
    }, [user]);

    return (
        <div className="selectPlan">
            <div className="heading">Select Your Plan</div>
            <p className="sub-heading">
                You have the option of monthly or yearly billing.
            </p>
            <div className="selectPlanMenu">
                <div className="selectPlanList">
                    <div className="selectPlanItem active" data-plan="arcade">
                        <img src={arcadeImg} className="iconImg" />
                        <div>
                            <p className="label-bold">Arcade</p>
                            <p className="label-light" data-arcade-price>
                                $9/mo
                            </p>
                            <p
                                className="label-light"
                                style={{
                                    color: "var(--purplish-blue)",
                                    display: "none",
                                }}
                                data-yearly-benefits
                            >
                                2 months free
                            </p>
                        </div>
                    </div>
                    <div className="selectPlanItem" data-plan="advanced">
                        <img src={advancedImg} className="iconImg" />
                        <div>
                            <p className="label-bold">Advanced</p>
                            <p className="label-light" data-advanced-price>
                                $12/mo
                            </p>
                            <p
                                className="label-light"
                                style={{
                                    color: "var(--purplish-blue)",
                                    display: "none",
                                }}
                                data-yearly-benefits
                            >
                                2 months free
                            </p>
                        </div>
                    </div>
                    <div className="selectPlanItem" data-plan="pro">
                        <img src={proImg} className="iconImg" />
                        <div>
                            <p className="label-bold">Pro</p>
                            <p className="label-light" data-pro-price>
                                $15/mo
                            </p>
                            <p
                                className="label-light"
                                style={{
                                    color: "var(--purplish-blue)",
                                    display: "none",
                                }}
                                data-yearly-benefits
                            >
                                2 months free
                            </p>
                        </div>
                    </div>
                </div>
                <div className="selectPlanToggle">
                    <p className="label-bold">Monthly</p>
                    <span className="sliderToggle">
                        <span className="sliderToggleCircle"></span>
                    </span>
                    <p className="label-bold">Yearly</p>
                </div>
            </div>
        </div>
    );
}
