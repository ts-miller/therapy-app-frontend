import { combineReducers } from 'redux'
import clients from './clientsReducer'
import appointments from './appointmentsReducer'

export default combineReducers({
    clients, appointments
})