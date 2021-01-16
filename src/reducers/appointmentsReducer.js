
const sortApps = apps => {
    return apps.sort((a, b) => {
        const aDateTime = a.date.concat(a.time)
        const bDateTime = b.date.concat(b.time)
        if (aDateTime < bDateTime) {return -1}
        if (aDateTime > bDateTime) {return 1}
        return 0
    })
}
    

const appointments = (state = [], action) => {
    let sortedApps
    let newApps
    switch (action.type) {
        case 'FETCH_APPOINTMENTS':
            sortedApps = sortApps(action.payload)
            return [ ...sortedApps ]
        case 'ADD_APPOINTMENT':
            newApps = [ ...state, action.payload ]
            sortedApps = sortApps(newApps)
            return [ ...sortedApps ]
        case 'DELETE_APPOINTMENT':
            newApps = state.filter( app => app.id !== action.payload.id)
            sortedApps = sortApps(newApps)
            return [ ...sortedApps ]
        default:
            return state
    }
}

export default appointments