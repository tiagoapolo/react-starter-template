// Modules
import React from 'react';
import styled from 'styled-components';

// Routes
import MyRouter from 'router/routes';
import { toast } from 'react-toastify';
toast.configure();

const AppWrapper = styled('main')`
    ${({ theme }) => `
    min-height: 100vh;
    display: flex;
    background: ${theme.colors.grey3};
    position: relative;
    box-sizing: border-box;
    align-items: center;
`}
`;

export default function App() {
    return (
        <AppWrapper>
            <MyRouter />
        </AppWrapper>
    );
}
