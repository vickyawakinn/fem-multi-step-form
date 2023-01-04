import arcadeImg from "./../../assets/images/icon-arcade.svg";
import advancedImg from "./../../assets/images/icon-advanced.svg";
import proImg from "./../../assets/images/icon-pro.svg";

export function SelectPlan() {
    return (
        <div className="selectPlan">
            <div className="heading">Select Your Plan</div>
            <p className="sub-heading">
                You have the option of monthly or yearly billing.
            </p>
            <div className="selectPlanMenu">
                <div className="selectPlanList">
                    <div className="selectPlanItem active">
                        <img src={arcadeImg} className="iconImg" />
                        <div>
                            <p className="label-bold">Arcade</p>
                            <p className="label-light">$9/mo</p>
                            <p
                                className="label-light"
                                style={{ color: "var(--purplish-blue)" }}
                            >
                                2 months free
                            </p>
                        </div>
                    </div>
                    <div className="selectPlanItem">
                        <img src={advancedImg} className="iconImg" />
                        <div>
                            <p className="label-bold">Advanced</p>
                            <p className="label-light">$12/mo</p>
                            <p
                                className="label-light"
                                style={{ color: "var(--purplish-blue)" }}
                            >
                                2 months free
                            </p>
                        </div>
                    </div>
                    <div className="selectPlanItem">
                        <img src={proImg} className="iconImg" />
                        <div>
                            <p className="label-bold">Pro</p>
                            <p className="label-light">$15/mo</p>
                            <p
                                className="label-light"
                                style={{ color: "var(--purplish-blue)" }}
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
