import React, { Component } from 'react';

class PatientsContainer extends Component {
    render() {
        return (
            <div>
                {this.props.clients.map(client => {
                    return <li key={client.id}>{client.name}</li>
                })}
            </div>
        );
    }
}

export default PatientsContainer;
