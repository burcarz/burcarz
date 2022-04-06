import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Gallery from '../components/Card';

function Home() {
    return (
        <div>
        <Header />
        <Nav />
        <Gallery />
        <Footer />
        </div>
    )
}

export default Home;