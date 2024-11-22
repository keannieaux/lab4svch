import React from 'react';
import IntroBlock from '../IntroductionBlock/IntroBlock'; 
import PremiumBlock from '../PremiumBlock/PremiumBlock'; 
import MainContent from '../MainComponent/MainContent'; 

const Home = () => {
    return (
        <>
                    <IntroBlock />
            <PremiumBlock />
            <MainContent />
        </>
    );
};

export default Home;
