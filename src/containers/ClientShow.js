import React, { Component } from 'react';
import { connect } from 'react-redux'

class ClientShow extends Component {
    constructor(props) {
        super(props)
        console.log('in client show constructor')
        let paramsId = parseInt(this.props.match.params.id, 10)
        let clients = props.clients
        let client = clients.find( client => client.id === paramsId)
        this.state = {
            client: (client) ? client : {firstName: 'N/A', lastName: 'N/A'}
        }
    }

    render() {
        const { firstName, lastName } = this.state.client
        return (
            <div>
                <h1>{firstName + lastName}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(ClientShow);
