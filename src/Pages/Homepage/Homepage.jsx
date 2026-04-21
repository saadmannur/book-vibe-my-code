import React, { Suspense } from 'react';
import Banner from '../../Components/Homepage/Banner';
import AllBook from '../../Components/Homepage/AllBooks';
import AllBooks from '../../Components/Homepage/AllBooks';



const Homepage = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <AllBooks></AllBooks>
            
        </div>
    );
};

export default Homepage;