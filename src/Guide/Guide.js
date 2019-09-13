import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card } from 'react-bootstrap';
import './Guide.css';

function Guide() {
    return (
        <div className="Guide">
            <Accordion className="accordion" defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle className="accordion toggle" as={Card.Header} eventKey="0">
                        Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse className="accordion collapse" eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle className="accordion toggle" as={Card.Header} eventKey="1">
                        Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse className="accordion collapse" eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default Guide;
