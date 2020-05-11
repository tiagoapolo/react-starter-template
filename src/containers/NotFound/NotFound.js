// Modules
import React from 'react';
import styled from 'styled-components';

const NotFoundStyled = styled('div')`
    ${() => `
        background: #d30;
        color: #ffffff;
    `}
`;

function NotFound() {
    return <NotFoundStyled>NotFound</NotFoundStyled>;
}

export default NotFound;
