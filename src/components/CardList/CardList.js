import { CardContainer } from "./styles";
import { useDispatch } from "react-redux";
import { addToCart } from '../../actions/cart';
import getScooters from '../../getScooters';
import { Card } from "../Card/Card";

const scooters = getScooters();

export function CardList() {
    const dispatch = useDispatch();

    const addCardItemToCart = (itemId) => {
        dispatch(addToCart(itemId));
    };

    return (
        <CardContainer>
            {scooters.map(({ id, name, price, image }) => (
                <Card
                    key={id}
                    itemId={id}
                    name={name}
                    price={price}
                    imgSrc={image}
                    addCardItemToCart={addCardItemToCart}
                />
            ))}
        </CardContainer>
    )
};

