import React, { Component } from 'react'
import ProgressCards from './ProgressCards'

class ProgressPage extends Component {
    render() {
        return (
            <div>
                <h2>{`Patient's Progress`}</h2>
                <ProgressCards />
            </div>
        )
    }
}

export default ProgressPage