const clients = (state = [], action) => {
    switch (action.type) {
        // case 'START_ADDING_CLIENT':
        //     console.log('adding client')
        case 'ADD_CLIENT':
            return [ ...state, action.payload ]
        default:
            return state
    }
}

export default clients