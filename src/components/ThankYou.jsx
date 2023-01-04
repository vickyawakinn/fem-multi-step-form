import thankImg from "./../assets/images/icon-thank-you.svg";

export function ThankYou() {
    return (
        <div className="thankYou">
            <div className="thankYou-container">
                <img src={thankImg}></img>
                <div className="heading">Thank You!</div>
                <p className="label-light thanksPara">
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    );
}
