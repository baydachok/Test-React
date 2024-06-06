import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "./Card.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ProductCardBody = ({deletionCallback, title, description, id}) => {
    const navigate = useNavigate();
    const role = useSelector((state) => state.auth.role);

    return (
        <Card.Body className={classes.cardBody + " d-flex flex-column justify-content-end"}>
            <Card.Title>{title}</Card.Title>
            <Card.Text as="div" className={classes.readMore}>
                <div className={classes.readMoreDescription}>
                    {description}
                </div>
                <Link to={"/catalog/" + id} className={classes.readMoreLink}>

                </Link>
            </Card.Text>
            {role === "[MANAGER]" ? <Button variant="info" className={classes.cardButton + " mb-2"} onClick={() => navigate("modify/" + id)}>Изменить
                товар</Button> : <></>
            }
            {role === "[MANAGER]" ? <Button variant="danger" className={classes.cardButton} onClick={() => {
                deletionCallback(id);
            }}>Удалить товар</Button> : <></>}
        </Card.Body>
    );
};

export default ProductCardBody;