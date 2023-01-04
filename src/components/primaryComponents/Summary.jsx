export function Summary() {
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
                            <p className="label-bold">Arcade (Monthly)</p>
                            <a href="#" className="label-light">
                                Change
                            </a>
                        </div>
                        <div className="summaryItemPrice">$9/mo</div>
                    </div>
                    <div className="summaryItem">
                        <p className="label-light">Online Service</p>
                        <p className="regular summaryItemPrice">+$1/mo</p>
                    </div>
                    <div className="summaryItem">
                        <p className="label-light">Larger Storage</p>
                        <p className="regular summaryItemPrice">+$2/mo</p>
                    </div>
                </div>
                <div className="summaryItemTotal">
                    <p className="label-light">Total (per month)</p>
                    <p
                        className="summaryItemPrice heavy"
                        style={{ color: "var(--purplish-blue)" }}
                    >
                        +$12/mo
                    </p>
                </div>
            </div>
        </div>
    );
}
