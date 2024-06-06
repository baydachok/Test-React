import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import axios from "axios";
import {POST_PRODUCTS} from "../../constants/URLS";
import {Container, Row} from "react-bootstrap";

const ProductCreationForm = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(10);
    const [imageSrc, setImageSrc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(POST_PRODUCTS, {
            name: name,
            description: description,
            price: price,
            imageSrc: imageSrc
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Container>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formProductName">
                        <Form.Label>Название товара</Form.Label>
                        <Form.Control value={name} type="text" placeholder="Введите название"
                                      onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formProductDescription">
                        <Form.Label>Описание товара</Form.Label>
                        <Form.Control value={description} as="textarea" rows={3} placeholder="Введите описание"
                                      onChange={(e) => setDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formProductPrice">
                        <Form.Label>Цена товара</Form.Label>
                        <Form.Control value={price} type="number" placeholder="Введите цену"
                                      onChange={(e) => setPrice(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formProductImageSrc">
                        <Form.Label>Ссылка на изображение</Form.Label>
                        <Form.Control value={imageSrc} type="url" placeholder="Добавьте ссылку на изображение товара"
                                      onChange={(e) => setImageSrc(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Создать
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default ProductCreationForm;
