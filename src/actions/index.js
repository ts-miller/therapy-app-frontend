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