import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteClient } from '../actions/index'
import { Redirect } from 'react-router-dom'

class ClientShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: 'N/A', 
            lastName: ''
        }
    }

    componentDidMount() {
        let paramsId = parseInt(this.props.match.params.id, 10)
        let clients = this.props.clients
        let client = clients.find( client => client.id === paramsId)
        this.setState(client)
    }

    handleClick = event => {
        event.preventDefault()
        this.props.deleteClient(this.state)
    }

    render() {
        const { firstName, lastName } = this.state

        let paramsId = parseInt(this.props.match.params.id, 10)

        return (
            <Container>
                <Row><h1>{`${firstName} ${lastName ? lastName : ''}'s Profile`}</h1></Row>
                <Link to={`${paramsId}/edit`}><Button>Edit Client Info</Button></Link>{'  '}
                <Button onClick={this.handleClick}>Delete Client</Button>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps, { deleteClient })(ClientShow);
