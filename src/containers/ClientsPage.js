import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import NewClientModal from '../components/NewClientModal'
import ClientsContainer from './ClientsContainer'
import { connect } from 'react-redux'
import { fetchClients } from '../actions/index'

class ClientsPage extends Component {
    constructor() {
        super()
        this.state = {
            sortValue: '1',
            showForm: false
        }
    }

    componentDidMount() {
        this.props.fetchClients()
    }

    render() {
        return (
            <>
                <div>
                    <Button id='new-client-btn' onClick={()=>this.setState({showForm: true})}>New Client</Button>
                    <ClientsContainer sort={this.state.sortValue}/>
                </div>
                <NewClientModal show={this.state.showForm} onHide={()=>this.setState({showForm: false})} />
            </>
        )
    }
}

export default connect(null, { fetchClients })(ClientsPage)