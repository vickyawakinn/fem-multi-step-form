import { useContext, useEffect, useState } from "react";
import { DataContext, DataUpdateContext } from "../../data";
import checkImg from "./../../assets/images/icon-checkmark.svg";

export function AddOns() {
    const [user, setUser] = useState([]);

    const data = useContext(DataContext);
    const dataUpdate = useContext(DataUpdateContext);

    useEffect(() => {
        dataUpdate((prev) => {
            return {
                ...prev,
                active: {
                    prev: "/selectPlan",
                    current: "/addOns",
                    next: "/summary",
                },
            };
        });
    }, []);

    useEffect(() => {
        const { plan } = data;
        if (plan.time == "monthly") {
            document.querySelector("[data-extra-space-price]").textContent =
                "+$2/mo";
            document.querySelector(
                "[data-multiplayer-access-price]"
            ).textContent = "+$1/mo";
            document.querySelector("[data-custom-theme-price]").textContent =
                "+$2/mo";
        } else if (plan.time == "yearly") {
            document.querySelector("[data-extra-space-price]").textContent =
                "+$20/yr";
            document.querySelector(
                "[data-multiplayer-access-price]"
            ).textContent = "+$10/yr";
            document.querySelector("[data-custom-theme-price]").textContent =
                "+$20/yr";
        }

        const addOnsList = document.querySelectorAll(".addOnsItem");

        function selectAddOn() {
            this.classList.toggle("selected");
            if (this.classList.contains("selected")) {
                setUser((prev) => {
                    return [...prev, this.getAttribute("data-add")];
                });
            } else {
                setUser((prev) => {
                    return prev.filter(
                        (ele) => ele != this.getAttribute("data-add")
                    );
                });
            }
        }
        addOnsList.forEach((item) => {
            item.addEventListener("click", selectAddOn);
        });

        return () => {
            addOnsList.forEach((item) => {
                item.removeEventListener("click", selectAddOn);
            });
        };
    }, []);

    useEffect(() => {
        dataUpdate((prev) => {
            return { ...prev, addOns: user };
        });
    }, [user]);

    return (
        <div className="addOns">
            <div className="heading">Pick Add Ons</div>
            <p className="sub-heading">
                Add-ons help enhance your gaming experience;
            </p>
            <div className="addOnsMenu">
                <div className="addOnsList">
                    <div className="addOnsItem" data-add="online service">
                        <div className="addOnsCheck">
                            <img src={checkImg} alt="" />
                        </div>
                        <div className="addOnsDesc">
                            <p className="label-bold">Online Service</p>
                            <p className="label-light">
                                Access to multiplayer games
                            </p>
                        </div>
                        <div className="addOnsPrice">
                            <p
                                className="label-light"
                                style={{ color: "var(--purplish-blue)" }}
                                data-multiplayer-access-price
                            >
                                +$10/yr
                            </p>
                        </div>
                    </div>
                    <div className="addOnsItem" data-add="larger storage">
                        <div className="addOnsCheck">
                            <img src={checkImg} alt="" />
                        </div>
                        <div className="addOnsDesc">
                            <p className="label-bold">Larger Storage</p>
                            <p className="label-light">
                                Extra 1TB of cloud save
                            </p>
                        </div>
                        <div className="addOnsPrice">
                            <p
                                className="label-light"
                                style={{ color: "var(--purplish-blue)" }}
                                data-extra-space-price
                            >
                                +$20/yr
                            </p>
                        </div>
                    </div>
                    <div className="addOnsItem" data-add="customizable profile">
                        <div className="addOnsCheck">
                            <img src={checkImg} alt="" />
                        </div>
                        <div className="addOnsDesc">
                            <p className="label-bold">Customizable Profile</p>
                            <p className="label-light">
                                Custom theme on your profile
                            </p>
                        </div>
                        <div className="addOnsPrice">
                            <p
                                className="label-light"
                                style={{ color: "var(--purplish-blue)" }}
                                data-custom-theme-price
                            >
                                +$20/yr
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
