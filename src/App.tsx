import './App.css';
import DemoVideo from './layouts/DemoVideo';
import Footer from './layouts/Footer';
import Header from './layouts/header/Header';
import HeroSection from './layouts/HeroSection';
import OnchainWork from './layouts/OnchainWork';
import PowerdOnchain from './layouts/PowerdOnchain';
import Roadmap from './layouts/Roadmap';
import Tokenomics from './layouts/Tokenomics';
import WhyUs from './layouts/WhyUs';

import articleBackgrondImage from '/assets/articleBackgrondImage.png';
import DeveloperEcosystem from './layouts/DeveloperEcosystem';
import ArticlesAndInsights from './layouts/ArticlesAndInsights';

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.5,
            duration: 1,
        });
        lenis.on('scroll', () => {});

        function raf(time: DOMHighResTimeStamp): void {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);
    return (
        <div>
            <Header />
            <HeroSection />
            <DemoVideo />
            <WhyUs />
            <OnchainWork />
            <PowerdOnchain />
            <Tokenomics />
            <Roadmap />
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 right-[-72.76163rem] bottom-[-10.63863rem] -z-10 rotate-[-63.244deg] md:top-[30%] md:-left-[50.3125rem] md:rotate-0">
                    <img
                        src={articleBackgrondImage}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-[95.45306rem] w-[150.35788rem] md:h-[110.89838rem] md:w-[174.6875rem]"
                        alt="backgroundImage"
                    />
                </div>
                <DeveloperEcosystem />
                <ArticlesAndInsights />
                <Footer />
            </div>
        </div>
    );
}

export default App;
