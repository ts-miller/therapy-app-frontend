const appointments = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_APPOINTMENTS':
            return [ ...action.payload ]
        case 'ADD_APPOINTMENT':
            return [ ...state, action.payload ]
        case 'DELETE_APPOINTMENT':
            const newApps = state.filter( app => app.id !== action.payload.id)
            return [ ...newApps ]
        default:
            return state
    }
}

export default appointments