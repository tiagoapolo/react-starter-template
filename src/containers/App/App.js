// Modules
import React from 'react';

// Containers
import Routers from 'router/router';
import Header from 'containers/Header/Header';
import Footer from 'containers/Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <Routers />
            <Footer />
        </>
    );
}

export default App;
