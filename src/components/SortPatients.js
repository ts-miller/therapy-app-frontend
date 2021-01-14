import React from 'react';

const SortPatients = (props) => {
    return (
        <div style={{alignContent: 'right'}}>
            <label>Sort By:</label>
            <select value={props.value} onChange={props.selectNew}>
                <option value='1'>Upcoming Visits</option>
                <option value='2'>Name</option>
                <option value='3'>Highest Progress</option>
            </select>
        </div>
    );
}

export default SortPatients;
