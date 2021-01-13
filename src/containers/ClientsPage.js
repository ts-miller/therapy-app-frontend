import React, { Component } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

class ClientsPage extends Component {
    constructor() {
        super()
        this.state = {
            sortValue: '1',
            showForm: false,
            form: {
                name: '',
                age: '',
                summary: ''
            }
        }
    }

    handleChange = event => {
        const name = event.target.id
        const value = event.target.value
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state.form)
        this.setState({
            ...this.state,
            form: {
                name: '',
                age: '',
                summary: '',
            }
        })
    }

    renderForm = () => {
        return (
                <Container className='new-patient-form'>
                    <Form onSubmit={this.handleSubmit}>
                        <h3>New Client</h3>
                        <Row>
                            <Col>
                                <Form.Group controlId='name'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="input" 
                                        onChange={this.handleChange} 
                                        value={this.state.form.name}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId='age'>
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="number"
                                        onChange={this.handleChange} 
                                        value={this.state.form.age} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId='summary'>
                            <Form.Label>Summary</Form.Label>
                            <Form.Control as="textarea" 
                                rows={5} 
                                onChange={this.handleChange} 
                                value={this.state.form.summary} />
                        </Form.Group>
                            <Button variant='primary' type='submit' block>Submit</Button>
                    </Form>
                </Container>
        )
    }

    render() {
        const { showForm } = this.state
        return (
            <div>
                <div>
                    { !showForm && 
                    <Button className='center' onClick={()=>this.setState({showForm: true})}>New Patient</Button> }
                    { showForm && this.renderForm() }
                    <div style={{alignContent: 'right'}}>
                        <label>Sort By:</label>
                        <select value={this.state.sortValue} onChange={e=>this.setState({sortValue: e.target.value})}>
                            <option value='1'>Upcoming Visits</option>
                            <option value='2'>Name</option>
                            <option value='3'>Highest Progress</option>
                        </select>
                    </div>       
                </div>
                <div>{'Patients in Alphabetical order'}</div>
            </div>
        )
    }
}

export default ClientsPage