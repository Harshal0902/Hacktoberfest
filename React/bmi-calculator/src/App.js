import React from "react";
import "./App.css";
import {
    Form,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input,
    Container,
    Row,
    Col,
    FormGroup,
    Label,
} from "reactstrap";

import useBmi from "./hooks/useBmi";

function App() {
    const { height, setHeight, weight, setWeight, renderResults } = useBmi();
    return (
        <div className="App">
            <header className="App-header">
                <h1>BMI Calculator</h1>
                <p>Enter your height and weight to calculate your BMI</p>
            </header>
            <Container className="body">
                <Row>
                    <Col sm="6">
                        <h2>Height & Weight</h2>
                        <Form inline>
                            <FormGroup>
                                <Label />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Height</InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        name="height"
                                        type="number"
                                        defaultValue={height}
                                        onChange={(e) =>
                                            setHeight(e.target.value)
                                        }
                                    />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>cm</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>

                            <FormGroup>
                                <Label />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Weight</InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="number"
                                        name="weight"
                                        defaultValue={weight}
                                        onChange={(e) =>
                                            setWeight(e.target.value)
                                        }
                                    />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>Kg</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col sm="6">{renderResults()}</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
