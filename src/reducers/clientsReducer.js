const clients = (state = [], action) => {
    switch (action.type) {
        case 'LOADING':
            console.log('loading stuff...')
            return [{ loading: true }]
        case 'FETCH_CLIENTS':
            console.log('got stuff!')
            return [ ...action.payload ]
        case 'ADD_CLIENT':
            return [ ...state, action.payload ]
        case 'DELETE_CLIENT':
            const newClients = state.filter( client => client.id !== action.payload.id)
            return [ ...newClients ]
        default:
            return state
    }
}

export default clients