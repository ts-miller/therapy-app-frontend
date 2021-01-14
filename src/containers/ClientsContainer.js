import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap'
import Client from '../components/Client'
import NewVisitModal from '../components/NewVisitModal'
import { connect } from 'react-redux'

class ClientsContainer extends Component {
    constructor() {
        super()
        this.state = {
            modalShow: false,
            clientName: ''
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
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.clients.map(client => {
                                return <Client key={client.id} 
                                        showModal={() => this.setState({modalShow: true, clientName: client.first_name})} 
                                        client={client}/>
                            })}
                        </tbody>
                    </Table>
                </Container>
                <NewVisitModal client={this.state.clientName} 
                    show={this.state.modalShow} 
                    onHide={() => this.setState({modalShow: false})} />
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
