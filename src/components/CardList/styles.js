import styled from "styled-components";

export const CardContainer = styled.ul`
    margin: auto;
    max-width: 850px;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 15px;
    padding-left: 20px;

    @media (max-width: 424px) {
        width: 100%;
    }
`