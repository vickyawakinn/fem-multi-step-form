import checkImg from "./../../assets/images/icon-checkmark.svg";

export function AddOns() {
    return (
        <div className="addOns">
            <div className="heading">Pick Add Ons</div>
            <p className="sub-heading">
                Add-ons help enhance your gaming experience;
            </p>
            <div className="addOnsMenu">
                <div className="addOnsList">
                    <div className="addOnsItem selected">
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
                            >
                                +$10/yr
                            </p>
                        </div>
                    </div>
                    <div className="addOnsItem">
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
                            >
                                +$20/yr
                            </p>
                        </div>
                    </div>
                    <div className="addOnsItem">
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
