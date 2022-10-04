import { settings } from "../settings";

function Footer() {
    return (
        <div className="Footer-container">
            <div className="Footer-container_register">
                <img className="Img-brand" src={settings.icon} />
                <img className="Img-letter-brand" src={settings.iconLetters} />
                <h3>HAVEN'T YOU REGISTERED YET?</h3>
                <p>Select the type of profile with which you want to be part of the AgriGlobal Market Community</p>
                <div className="Footer-container-btns">
                    <button>Buyer</button>
                    <button>Provider</button>
                </div>
            </div>
            <div className="Footer-container_info">
                <div className="Footer-container_info_content">
                    <div className="Footer-container_info_contact">
                        <h3>CONTACT US</h3>
                        <div className="Address">
                            <img src={settings.iconLocation} />
                            <p>8333 N.W. 53rd Street Suite 450 33166
                                Doral FL, United States</p>
                        </div>
                        <div className="Email">
                            <img src={settings.iconEmail} />
                            <p>service@agriglobalmarket.com</p>
                        </div>
                    </div>
                    <div className="Footer-container_info_services">
                        <h3>OUR SERVICES</h3>
                        <p>ABOUT US</p>
                        <p>Sell your product on AGM</p>
                        <p>Sign In</p>
                        <p>Help Center</p>
                        <p>AGM News</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className="Footer-continer_info_footer">
                    <a>AgriGlobal Market INC ©2022 All Rights Reserved</a>
                    <a>Terms and Conditions</a>
                    <a>Privacy Policies</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;