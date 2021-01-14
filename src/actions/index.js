export const fetchClients = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/clients')
            .then(resp => resp.json())
            .then(clients => {
                dispatch({ type: 'FETCH_CLIENTS', payload: clients})
            })
    }
}

export const fetchAppointments = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/appointments')
            .then(resp => resp.json())
            .then(appointments => {
                dispatch()
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
            body: JSON.stringify({client:client})
        })
        .then(resp => resp.json())
        .then(client => {
            dispatch({ type: 'ADD_CLIENT', payload: client })
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
            body: JSON.stringify({appointment:app})
        })
        .then(resp => resp.json())
        .then(app => {
            dispatch({ type: 'ADD_APPOINTMENT', payload: app})
        })
    }
}