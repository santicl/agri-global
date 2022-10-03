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
            <h2>{DiscountOfert(props.productPrice, props.specialPrice)}</h2>
        </div>
      </div>
    </div>
  );
}

export default Ofert;