import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Gallery from '../components/Gallery';

function Home() {
    return (
        <main>
            <Header />
            <Nav />
            <Gallery />
            <Footer />
        </main>
    )
}

export default Home;