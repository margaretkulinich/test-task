import { getDollarsFromCents } from "./helpers";
import { CardItem, classes } from "./styles";

export function Card({ itemId, imgSrc, name, price, addCardItemToCart }) {
    return(
        <CardItem>
            <div>
                <img src={imgSrc} className={classes.productImage}></img>
            </div>
            <div className={classes.cardInfo}>
                <div>{name}</div>
                <div>${getDollarsFromCents(price)}</div>
                <button
                    className={classes.addButton}
                    onClick={addCardItemToCart.bind(null, itemId)}
                >Add</button>
            </div>
        </CardItem>
    )
}