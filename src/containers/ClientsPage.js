import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import NewClientModal from '../components/NewClientModal'
import SortClients from '../components/SortClients'
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
                    <div>
                        <Button id='new-client-btn' onClick={()=>this.setState({showForm: true})}>New Client</Button>
                        <SortClients value={this.state.sortValue} 
                            selectNew={e => this.setState({ sortValue: e.target.value })}
                        />
                    </div>
                    <ClientsContainer sort={this.state.sortValue}/>
                </div>
                <NewClientModal show={this.state.showForm} onHide={()=>this.setState({showForm: false})} />
            </>
        )
    }
}

export default connect(null, { fetchClients })(ClientsPage)