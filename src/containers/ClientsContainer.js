import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap'
import ClientRow from '../components/ClientRow'
import { connect } from 'react-redux'

class ClientsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            client: {},
            clientId: null
        }
    }

    render() {
        return (
            <>
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Age</th>
                                <th>Next Visit</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.clients.map((client, index) => {
                                return <ClientRow key={ client.id } 
                                        handleClick={this.handleClick} 
                                        show={this.state.modalShow}
                                        client={ client } 
                                        index={ index + 1 }
                                        />
                            })}
                        </tbody>
                    </Table>
                </Container>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(ClientsContainer)
