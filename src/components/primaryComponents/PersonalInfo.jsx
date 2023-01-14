import { useState, useContext, useEffect } from "react";
import { DataUpdateContext } from "../../data";

export function PersonalInfo() {
    const [user, setUser] = useState({
        name: undefined,
        email: undefined,
        phone: undefined,
    });

    const dataUpdate = useContext(DataUpdateContext);

    function setName(e) {
        setUser((prev) => {
            return { ...prev, name: e.target.value };
        });
    }
    function setEmail(e) {
        setUser((prev) => {
            return { ...prev, email: e.target.value };
        });
    }
    function setPhone(e) {
        setUser((prev) => {
            return { ...prev, phone: e.target.value };
        });
    }

    useEffect(() => {
        dataUpdate((prev) => {
            return {
                ...prev,
                active: {
                    prev: undefined,
                    current: "/",
                    next: "/selectPlan",
                },
            };
        });
    }, []);

    useEffect(() => {
        dataUpdate((prev) => {
            return { ...prev, personalInfo: user };
        });
        const { name, email, phone } = user;
        if (name == "") {
            document
                .getElementById("inputName")
                .parentNode.classList.add("invalid");
        } else if (name && name.length > 0) {
            document
                .getElementById("inputName")
                .parentNode.classList.remove("invalid");
        }
        if (email == "") {
            document
                .getElementById("inputEmail")
                .parentNode.classList.add("invalid");
        } else if (email && email.length > 0) {
            document
                .getElementById("inputEmail")
                .parentNode.classList.remove("invalid");
        }
        if (phone == "") {
            document
                .getElementById("inputNumber")
                .parentNode.classList.add("invalid");
        } else if (phone && phone.length > 0) {
            document
                .getElementById("inputNumber")
                .parentNode.classList.remove("invalid");
        }
    }, [user]);

    return (
        <div className="personalInfo">
            <div className="heading">Personal Info</div>
            <p className="sub-heading">
                Please provide your name, email address, and phone number.
            </p>
            <form className="peronalDetails">
                <div className="inputs">
                    <div>
                        <label
                            htmlFor="inputName"
                            className="label-light"
                            style={{ color: "var(--marine-blue)" }}
                        >
                            Name
                        </label>
                        <label htmlFor="inputName" className="invalid-entry">
                            This field is required
                        </label>
                    </div>
                    <input
                        id="inputName"
                        type="text"
                        className="inputField label-bold"
                        placeholder="e.g. Stephen King"
                        onBlur={setName}
                    />
                </div>
                <div className="inputs">
                    <div>
                        <label
                            htmlFor="inputEmail"
                            className="label-light"
                            style={{ color: "var(--marine-blue)" }}
                        >
                            Email
                        </label>
                        <label htmlFor="inputEmail" className="invalid-entry">
                            This field is required
                        </label>
                    </div>
                    <input
                        id="inputEmail"
                        type="email"
                        className="inputField label-bold"
                        placeholder="e.g. stephenking@lorem.com"
                        onBlur={setEmail}
                    />
                </div>
                <div className="inputs">
                    <div>
                        <label
                            htmlFor="inputNumber"
                            className="label-light"
                            style={{ color: "var(--marine-blue)" }}
                        >
                            Phone Number
                        </label>
                        <label htmlFor="inputName" className="invalid-entry">
                            This field is required
                        </label>
                    </div>
                    <input
                        id="inputNumber"
                        type="text"
                        className="inputField label-bold"
                        placeholder="e.g. +12 3456 789"
                        onBlur={setPhone}
                    />
                </div>
            </form>
        </div>
    );
}
