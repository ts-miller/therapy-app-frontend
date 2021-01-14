import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import NewClientForm from '../components/NewClientForm'
import SortPatients from '../components/SortPatients'
import PatientsContainer from './PatientsContainer'
import { connect } from 'react-redux'

class ClientsPage extends Component {
    constructor() {
        super()
        this.state = {
            sortValue: '1',
            showForm: false
        }
    }

    toggleForm = () => {this.setState({ showForm: !this.state.showForm })}

    render() {
        const { showForm } = this.state
        const clientForm = <NewClientForm closeForm={this.toggleForm} />
        const newClientButton = <Button onClick={this.toggleForm}>New Client</Button>
        return (
            <div>
                <div>
                    { (showForm) ? clientForm : newClientButton }
                    <SortPatients value={this.state.sortValue} 
                        selectNew={e => this.setState({ sortValue: e.target.value })}
                    />
                </div>
                <PatientsContainer clients={this.props.clients}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(ClientsPage)