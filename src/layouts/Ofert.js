import DiscountOfert from "../helpers/DiscountOfert";
import { settings } from "../settings";

function Ofert(props) {
  return (
    <div className={props.promo == false ? "No-promo" : "Promo"}>
      <div className="ofert__content">
        <div className="Content-discount">
            {settings.discountOfert}
        </div>
        <div className="Content-title">
            <p className="P">- {DiscountOfert(props.productPrice, props.specialPrice)}</p>
        </div>
      </div>
    </div>
  );
}

export default Ofert;