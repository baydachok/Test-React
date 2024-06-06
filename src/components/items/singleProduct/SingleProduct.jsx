import styles from "./SingleProduct.module.css";
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {GET_PRODUCT} from "../../../constants/URLS";

const SingleProduct = () => {

    const { itemId } = useParams();
    const [product, setProduct] = useState({name: "", description: "", price: 10, imageSrc: ""});

    useEffect(() => {
        axios.get(GET_PRODUCT + itemId)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <Container className={styles.productContainer}>
            <Link to={"/catalog"} href="src/components/items#" className={styles.close} />
            <Row>
                <Col xs="6" className={styles.productImage}>
                    <Image src={product.imageSrc} fluid alt="Product Image"/>
                </Col>
                <Col xs="6" className={styles.productDetails}>
                    <h2>{product.name}</h2>
                    <p className={styles.price}>{product.price}</p>
                    <p className={styles.description}>{product.description}</p>
                    <button>Добавить в корзину</button>
                </Col>
            </Row>
            <Row>
                <div></div>
                Наши другие товары:

            </Row>
        </Container>
    );
}

export default SingleProduct;
