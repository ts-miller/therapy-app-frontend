import React from 'react';
import { DropdownButton } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'
import { deleteClient } from '../actions';
import { connect } from 'react-redux'

const ClientRow = ({ client, deleteClient, index }) => {
    
    const anyApp = client.appointments.length > 0

    const handleClick = () => {
        deleteClient(client)
    }
    return (
        <>
            <tr>
                <th>{index}</th>
                <td>{client.firstName}</td>
                <td>{client.lastName}</td>
                <td>{client.age}</td>
                <td>{(anyApp) ? client.appointments[0].date : "N/A"}</td>
                <td>
                    <Link to={`client/${client.id}/edit`}>Edit</Link>{" || "}
                    <Link to='/clients' onClick={handleClick}>Delete</Link>
                </td>
            </tr>
        </>
    );
}

export default connect(null, { deleteClient })(ClientRow)
