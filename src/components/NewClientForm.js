import React, { Component } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { addClient } from '../actions/index'
import { connect } from 'react-redux'

class NewClientForm extends Component {
    constructor(props) {
        super(props)

        this.state ={
            name: '',
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
            name: '',
            age: '',
            summary: '',   
        })
    }

    render() {
        return (
            <Container>
                <Form className='new-patient-form' onSubmit={this.handleSubmit}>
                    <Row>
                        <Col><h3>New Client</h3></Col>
                        <Col style={{textAlign: 'end'}}>
                            <Button variant="secondary" onClick={this.props.closeForm}>X</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="input" 
                                    onChange={this.handleChange} 
                                    value={this.state.name}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId='age'>
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number"
                                    onChange={this.handleChange} 
                                    value={this.state.age} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId='summary'>
                        <Form.Label>Summary</Form.Label>
                        <Form.Control as="textarea" 
                            rows={4} 
                            onChange={this.handleChange} 
                            value={this.state.summary} />
                    </Form.Group>
                        <Button variant='primary' type='submit' block>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default connect(null, { addClient })(NewClientForm)
