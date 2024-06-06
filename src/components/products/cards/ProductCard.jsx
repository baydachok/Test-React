import React from 'react';
import Card from "react-bootstrap/Card";
import ProductCardBody from "./ProductCardBody";
import classes from "./Card.module.css";

const ProductCard = ({deletionCallback, name, description, imageSrc, productId}) => {
    return (
        <Card className={classes.card}  >
            <Card.Img variant="top" src={imageSrc}/>
            <ProductCardBody deletionCallback={deletionCallback} title={name} description={description} id={productId} />
        </Card>
    );
};

export default ProductCard;
