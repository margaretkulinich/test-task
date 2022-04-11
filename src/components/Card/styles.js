import styled from "styled-components";

export const classes = {
    productImage: 'product-image',
    cardInfo: 'card-info',
    addButton: 'add-button',
};

export const CardItem = styled.li`
    width: 300px;
    height: 300px;
    border: 3px solid grey;
    margin: 20px 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .${classes.productImage} {
        max-width: 150px;
        max-height: 150px;
        object-fit: contain;
    }

    .${classes.cardInfo} {
        width: 50%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: inherit;
        font-size: 22px;
        font-weight: 500;
    }

    .${classes.addButton} {
        padding: 10px;
        width: 50px;
        font-size: 18px;
        font-weight: 400;
        width: 80%;
    }

    @media (max-width: 424px) {
        flex-direction: column;
    }
`