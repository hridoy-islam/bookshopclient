import React from 'react';
import Hero from '../components/Hero';
import Company from '../components/Company';
import Newsletter from '../components/Newsletter';
import Mission from '../components/Mission';
import Features from '../components/Features';
import Counter from '../components/Counter';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <Hero />
            <Mission />
            <Features />
            <Counter />
            <Company />
            <Testimonials />
            <Newsletter />
        </div>
    );
};

export default Home;