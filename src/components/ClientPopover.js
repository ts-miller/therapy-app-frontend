import React from 'react';
import { Popover } from 'react-bootstrap'

const ClientPopover = ( client ) => {
    return (
        <Popover id='popover-basic'>
            <Popover.Title as='h3'>{`Location: ${client.location}`}</Popover.Title>
            <Popover.Content>
                {client.summary}
            </Popover.Content>
        </Popover>
    );
}

export default ClientPopover;
