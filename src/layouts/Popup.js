import { settings } from "../settings";

function Popup(bool) {
    return (
        <div className={bool == true ? "Popup-container": "Popup-container-not"}>
            <div className="Compare">
                <span> {settings.arrowLeft} </span>
            </div>
        </div>
    );
}

export default Popup;