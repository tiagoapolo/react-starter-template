// Modules
import React from 'react';
import styled from 'styled-components';

const HomeStyled = styled('div')`
    ${() => `
        color: #d30;
    `}
`;

function Home() {
    return <HomeStyled>Home</HomeStyled>;
}

export default Home;
