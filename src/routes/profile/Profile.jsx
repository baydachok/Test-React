import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Profile.module.css";
import {Container, Row} from "react-bootstrap";

const Profile = () => {
    return (
        <Container className={styles.profileForm + " w-75 border rounded mt-3"}>
            <h1>Профиль</h1>
            <Row>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Электронная почта</Form.Label>
                        <Form.Control type="email" placeholder="Введите почту"/>
                        <Form.Text className="text-muted">
                            Уверяем вас. Нам можно доверить ваши персональные данные.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Здесь что-то будет"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Изменить
                    </Button>
                </Form>
            </Row>
        </Container>
    );
};

export default Profile;