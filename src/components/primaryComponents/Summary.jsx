import { useContext, useEffect } from "react";
import { DataContext, DataUpdateContext } from "../../data";
import { Link } from "react-router-dom";

export function Summary() {
    const data = useContext(DataContext);
    const dataUpdate = useContext(DataUpdateContext);

    const { plan, addOns } = data;

    useEffect(() => {
        dataUpdate((prev) => {
            return {
                ...prev,
                active: {
                    prev: "/addOns",
                    current: "/summary",
                    next: "/thankYou",
                },
            };
        });
    }, []);

    useEffect(() => {
        let total = 0;
        let tablea = {
            arcade: "9",
            advanced: "12",
            pro: "15",
        };
        total = parseInt(tablea[plan.plan]);
        total = plan.time == "monthly" ? total : total * 10;
        document.querySelector("[data-summary-plan-name]").textContent =
            plan.plan;
        document.querySelector("[data-summary-plan-period]").textContent =
            plan.time;
        document.querySelector("[data-summary-plan-price]").textContent = `$${
            plan.time == "monthly" ? tablea[plan.plan] : tablea[plan.plan] + "0"
        }/
            ${plan.time == "monthly" ? "mo" : "yr"}`;
        const itemParent = document.querySelector(".summaryItemParent");
        let tableau;
        let timePeriod;
        let nodeContent = "";
        addOns.forEach((item) => {
            if (plan.time == "monthly") {
                tableau = {
                    "online service": "1",
                    "larger storage": "2",
                    "customizable profile": "2",
                };
                timePeriod = "mo";
            } else if (plan.time == "yearly") {
                tableau = {
                    "online service": "10",
                    "larger storage": "20",
                    "customizable profile": "20",
                };
                timePeriod = "yr";
            }
            let node = `<div class="summaryItem">
                            <p class="label-light">${item}</p>
                            <p class="regular summaryItemPrice">+$${tableau[item]}/${timePeriod}</p>
                        </div>`;
            nodeContent += node;
            total += parseInt(tableau[item]);
        });
        itemParent.innerHTML = nodeContent;
        document.querySelector("[data-summary-total]").textContent = total;
        document.querySelector("[data-summary-time]").textContent =
            plan.time == "monthly" ? "mo" : "yr";
    }, []);

    return (
        <div className="summary">
            <div className="heading">Finishing Up</div>
            <p className="sub-heading">
                Double-check everything looks OK before confirming.
            </p>
            <div className="summaryMenu">
                <div className="summaryList">
                    <div className="summaryItem first">
                        <div>
                            <p className="label-bold">
                                <span data-summary-plan-name>Arcade</span> (
                                <span data-summary-plan-period>Monthly</span>)
                            </p>
                            <Link to="/selectPlan" className="label-light">
                                Change
                            </Link>
                        </div>
                        <div
                            className="summaryItemPrice"
                            data-summary-plan-price
                        >
                            $9/mo
                        </div>
                    </div>
                    <div className="summaryItemParent">
                        <div className="summaryItem">
                            <p className="label-light">Online Service</p>
                            <p className="regular summaryItemPrice">+$1/mo</p>
                        </div>
                        <div className="summaryItem">
                            <p className="label-light">Larger Storage</p>
                            <p className="regular summaryItemPrice">+$2/mo</p>
                        </div>
                    </div>
                </div>
                <div className="summaryItemTotal">
                    <p className="label-light">Total</p>
                    <p
                        className="summaryItemPrice heavy"
                        style={{ color: "var(--purplish-blue)" }}
                    >
                        +$<span data-summary-total></span>/
                        <span data-summary-time></span>
                    </p>
                </div>
            </div>
        </div>
    );
}
