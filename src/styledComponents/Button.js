import styled from 'styled-components'

export const Button = styled.button`
    background: #24649c;
    color: white;
    font-size: 1em;
    margin: 10px;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 5px
`;

export const BlockButton = styled(Button)`
    display: block
`