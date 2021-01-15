import React, { Component } from 'react';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap'
import { addClient } from '../actions/index'
import { connect } from 'react-redux'

class NewClientForm extends Component {
    constructor(props) {
        super(props)

        this.state ={
            firstName: '',
            lastName: '',
            age: '',
            summary: ''
        }
    }

    handleChange = event => {
        const name = event.target.id
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addClient(this.state)
        this.setState({
            firstName: '',
            lastName: '',
            age: '',
            location: '',
            summary: '',   
        })
        this.props.onHide()
    }

    render() {
        return (
            <Modal
                {...this.props }
                aria-labelledby='contained-modal-title-vcenter'
                centered    
            >
                <Form onSubmit={this.handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Client
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col><Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="input" 
                                    onChange={this.handleChange} 
                                    value={this.state.firstName}/>
                            </Form.Group></Col>
                            <Col><Form.Group controlId='lastName'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="input"
                                    onChange={this.handleChange} 
                                    value={this.state.lastName} />
                            </Form.Group></Col>
                        </Row>
                        <Row>
                            <Col><Form.Group controlId="age">
                                <Form.Label>Age</Form.Label>    
                                <Form.Control type="number"
                                    onChange={this.handleChange}
                                    value={this.state.age} />
                            </Form.Group></Col>
                            <Col><Form.Group controlId="location">
                                <Form.Label>{`Location (City, State)`}</Form.Label>
                                <Form.Control type="input"
                                    onChange={this.handleChange}
                                    value={this.state.location} />
                            </Form.Group></Col>
                        </Row>
                        <Form.Group controlId="summary">
                            <Form.Label>Summary</Form.Label>
                            <Form.Control as="textarea" 
                                rows={3} 
                                onChange={this.handleChange} 
                                value={this.state.summary} />
                        </Form.Group>
                            <Button variant='primary' type='submit' block>Submit</Button>
                    </Modal.Body>
                </Form>
            </Modal>
        );
    }
}

export default connect(null, { addClient })(NewClientForm)
