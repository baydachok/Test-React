import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';

import {setRole, setToken} from "../../redux/slices/roleSlice";
import {Modal} from "@mui/material";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {AUTH_LOGIN} from "../../constants/URLS";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    backgroundColor: "#142d4c",
    border: '2px solid #000',
    boxShadow: 24,
    overflow: 'auto',
    color: 'white',
    p: 4,
    borderRadius: "30px",
}

export function Login() {
    const role = useSelector((state) => state.auth.role);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(role === "" || token === "");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const isAuthenticated = () => role !== "" && token !== "";

    console.log(role);
    console.log(token);

    const handleClose = () => {
        if (isAuthenticated()) {
            setOpen(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(AUTH_LOGIN, {
            username: username,
            password: password
        })
            .then((response) => {
                if (response.status.valueOf() === 200) {
                    dispatch(setToken(response.data.accessToken));
                    dispatch(setRole(response.data.role));
                    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
                    setOpen(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Form style={style} className="p-4" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formLogin">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control value={username}
                                      onChange={(e) => setUsername(e.target.value)}
                                      type="text"
                                      placeholder="Введите логин"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control value={password}
                                      onChange={(e) => setPassword(e.target.value)}
                                      type="password"
                                      placeholder="Пароль"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Отправить
                    </Button>
                </Form>
            </Modal>
        </div>
    )
}
