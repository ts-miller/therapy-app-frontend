import humps from 'humps'

export const fetchClients = () => {
    return (dispatch) => {
        // dispatch({ type: 'LOADING' })
        return fetch('http://localhost:3000/clients')
            .then(resp => resp.json())
            .then(clients => {
                const camelizedClients = clients.map(client => humps.camelizeKeys(client))
                dispatch({ type: 'FETCH_CLIENTS', payload: camelizedClients })
            })
    }
}

export const fetchAppointments = () => {
    return (dispatch) => {
        // dispatch({ type: 'LOADING' })
        return fetch('http://localhost:3000/appointments')
            .then(resp => resp.json())
            .then(apps => {
                const camelizedApps = apps.map(app => humps.camelizeKeys(app))
                dispatch({ type: 'FETCH_APPOINTMENTS', payload: camelizedApps })
            })
    }
}

export const addClient = client => {
    return (dispatch) => {
        return fetch('http://localhost:3000/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ client: humps.decamelizeKeys(client) })
        })
        .then(resp => resp.json())
        .then(client => {
            dispatch({ type: 'ADD_CLIENT', payload: humps.camelizeKeys(client) })
        })
    }
}

export const deleteClient = client => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/clients/${client.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ client: humps.decamelizeKeys(client) })
        })
        .then(resp => resp.json())
        .then(client => {
            dispatch({ type: 'DELETE_CLIENT', payload: client})
            dispatch({ type: 'DELETE_CLIENT_APPOINTMENTS', payload: client})
        })
    }
}

export const deleteApp = app => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/appointments/${app.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ appointment: humps.decamelizeKeys(app) })
        })
        .then(resp => resp.json())
        .then(app => {
            dispatch({ type: 'DELETE_APPOINTMENT', payload: app})
        })
    }
}

export const addAppointment = app => {
    return (dispatch) => {
        return fetch('http://localhost:3000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({appointment: humps.decamelizeKeys(app)})
        })
        .then(resp => resp.json())
        .then(app => {
            dispatch({ type: 'ADD_APPOINTMENT', payload: humps.camelizeKeys(app)})
        })
    }
}