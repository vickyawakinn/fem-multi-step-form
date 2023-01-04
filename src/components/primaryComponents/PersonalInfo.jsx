export function PersonalInfo() {
    return (
        <div className="personalInfo">
            <div className="heading">Personal Info</div>
            <p className="sub-heading">
                Please provide your name, email address, and phone number.
            </p>
            <form className="peronalDetails">
                <div className="inputs">
                    <label
                        htmlFor="inputName"
                        className="label-light"
                        style={{ color: "var(--marine-blue)" }}
                    >
                        Name
                    </label>
                    <input
                        id="inputName"
                        type="text"
                        className="inputField label-bold"
                        placeholder="e.g. Stephen King"
                    />
                </div>
                <div className="inputs">
                    <label
                        htmlFor="inputEmail"
                        className="label-light"
                        style={{ color: "var(--marine-blue)" }}
                    >
                        Email
                    </label>
                    <input
                        id="inputEmail"
                        type="email"
                        className="inputField label-bold"
                        placeholder="e.g. stephenking@lorem.com"
                    />
                </div>
                <div className="inputs">
                    <label
                        htmlFor="inputNumber"
                        className="label-light"
                        style={{ color: "var(--marine-blue)" }}
                    >
                        Phone Number
                    </label>
                    <input
                        id="inputNumber"
                        type="text"
                        className="inputField label-bold"
                        placeholder="e.g. +12 3456 789"
                    />
                </div>
            </form>
        </div>
    );
}
