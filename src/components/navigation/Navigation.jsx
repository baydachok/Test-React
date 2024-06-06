import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import styles from "./Navigation.module.css";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {setRole, setToken} from "../../redux/slices/roleSlice";

const Navigation = () => {
    const role = useSelector((state) => state.auth.role);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(setRole(""));
        dispatch(setToken(""));
        navigate("/about");
    }

    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container className="ms-1">
                <Navbar.Brand>
                    <Link to={`/catalog`} className={styles.routerLink}>
                        <img
                            src={require("../../images/Elshopo.png")}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as="div"><Link to={`/profile`} className={styles.routerLink}>Профиль</Link></Nav.Link>
                    <Nav.Link as="div"><Link to={`/catalog`} className={styles.routerLink}>Товары</Link></Nav.Link>
                    {role === "[MANAGER]" ? <Nav.Link as="div"><Link to={`/add-product`} className={styles.routerLink}>Добавить товар</Link></Nav.Link> : <></>}
                    <Nav.Link as="div"><Link to={`/about`} className={styles.routerLink}>О нас</Link></Nav.Link>
                    <Nav.Link as="div"><Link to={`/support`} className={styles.routerLink}>Чат поддержки</Link></Nav.Link>
                    <Form onSubmit={onLogOut}><Button type="submit">Выйти из аккаунта</Button></Form>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;