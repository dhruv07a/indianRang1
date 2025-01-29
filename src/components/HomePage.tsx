import React from 'react';
import Carousel from './Carousel'
import Footer from './Footer'
import Navbar from './Navbar'
import Product from './Product'

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Product />
            <Footer />
        </div>
    );
};

export default HomePage;