import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap'
import ClientRow from '../components/ClientRow'
import { connect } from 'react-redux'
import NoItems from '../components/NoItems'

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
        if (!this.props.clients) {
            return (
                <NoItems item="Clients" />
            )
        }
        return (
            <>
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Next Appointment</th>
                                <th>Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.clients.map((client, index) => {
                                return <ClientRow key={ client.id } 
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
