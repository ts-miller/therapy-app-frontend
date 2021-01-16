import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addAppointment } from '../actions/index'

class NewVisitModal extends Component {
    constructor(props) {
        super(props)
        this.state ={
            clientId: '',
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
        const { clientId, date, time } = this.state
        event.preventDefault()
        if (clientId && date && time) {
            this.props.addAppointment(this.state)
            this.setState({
                clientId: '',
                date: '',
                time: ''
            })
            this.props.onHide()
        } else {
            alert('Please fill out all fields.')
        }
        
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
                        Add Appointment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Client</Form.Label>
                            <Form.Control as='select'
                                        name="clientId"
                                        value={this.state.clientId}
                                        onChange={this.handleChange}>
                                <option defaultValue value='' disabled="disabled">Choose Client...</option>
                                {this.props.clients.map(client => {
                                    return (
                                        <option key={client.id} value={client.id}>
                                            {`${client.firstName} ${client.lastName}`}
                                        </option>
                                    )
                                })}
                            </Form.Control>
                        </Form.Group>
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

export default connect(null, { addAppointment })(NewVisitModal)
