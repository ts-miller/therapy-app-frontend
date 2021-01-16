import React from 'react';
import { Container } from 'react-bootstrap'

const NoItems = ({ item }) => {
    return (
        <Container>
            <h1>{`No ${item}`}</h1>
        </Container>
    );
}

export default NoItems;
