import {Col, Container, Row} from "react-bootstrap";
import styles from "./Support.module.css";
import React, {useState} from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import userImage from '../../images/anon_img1.png';
import suppImage from '../../images/anon_img2.png';

const Support = () => {
    const getInitialMessages = () => {
        return [
            {
                date: new Date().toLocaleTimeString(),
                text: "Напишите ваще сообщение в чат...",
                author: "Поддержка",
                img: suppImage
            }
        ]
    }

    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState(getInitialMessages());
    const handleMessageFormChange = (e) => {
        setNewMessage(e.target.value);
    }
    const handleClick = (e) => {
        e.preventDefault();
        addNewMessage(newMessage);
    }

    const addNewMessage = (message) => {
        addUserMessage(message);
    }

    const addUserMessage = (message) => {
        setMessages([
            ...messages,
            {
                date: new Date().toLocaleTimeString(),
                text: message,
                author: "Вы",
                img: userImage
            },
            {
                date: new Date().toLocaleTimeString(),
                text: "Типо ответил на сообщение: " + message,
                author: "Поддержка",
                img: suppImage
            }
        ]);
    }


    return (
        <Container className="h-100">
            <Row>
                <Col className={styles.chatMessages + " p-4"}>
                    <Row>
                        <div className={styles.messageChart}>
                            {messages.map((message, index) => {
                                return (
                                    <div className="chat-message-right pb-4" key={index}>
                                        <div>
                                            <img src={message.img}
                                                 className="rounded-circle mr-1" width="40"
                                                 height="40" alt={"Message"}/>
                                            <div className="text-muted small text-nowrap mt-2">{message.date}</div>
                                        </div>
                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                            <div className={styles.nickname + " mb-1"}>{message.author}</div>
                                            {message.text}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Row>

                    <InputGroup className="mb-3">
                        <Form.Control
                            value={newMessage}
                            onChange={handleMessageFormChange}
                            placeholder="Введите ваше сообщение"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" onClick={handleClick} id="button-addon2">
                            Отправить
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Support;
