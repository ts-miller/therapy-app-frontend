import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

class NewVisitModal extends Component {
    constructor() {
        super()
        this.state ={
            date: '',
            time: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            date: '',
            time: ''
        })
    }
    
    render() {  
        return (
            <Modal
                {...this.props}
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {`Add Visit for ${this.props.client}`}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group controlId='date'>
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type='date'
                                        name="date" 
                                        value={this.state.date} 
                                        onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId='time'>
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control type='time'
                                        name="time"
                                        value={this.state.time}
                                        onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button type="submit" block>Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default NewVisitModal;
