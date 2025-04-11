import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Divider from '../components/ui/Divider';
import SectionHeadng from '../components/ui/SectionHeadng';
import DefiTrading from '../constants/icon/DefiTrading';
import NFTGaming from '../constants/icon/NFTGaming';
import SupplyChain from '../constants/icon/SupplyChain';
import InsuranceRisk from '../constants/icon/InsuranceRisk';
import AIWEB3 from '../constants/icon/AIWEB3';

import powerdOnchainDot from '/assets/powerdOnchainDot.png';
import powered1 from '/assets/powered1.png';
import powered2 from '/assets/powered2.png';
import powered3 from '/assets/powered3.png';
import powered4 from '/assets/powered4.png';
import powered5 from '/assets/powered5.png';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PowerdOnchain = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add(
            {
                isDesktop: '(min-width: 993px)',
                isMobile: '(max-width: 992px)',
            },
            context => {
                const { isDesktop, isMobile } = context.conditions || {};

                if (isMobile) {
                    gsap.set(
                        '.leftPowered1, .leftPowered2, .leftPowered3, .leftPowered4, .leftPowered5',
                        {
                            background:
                                'linear-gradient(245deg, #d9a585 -7.96%,#57169d 46.02%,#000 100%)',
                        },
                    );
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: '#powerdOnchain',
                            start: 'top top',
                            end: '+=1500',
                            pin: true,
                            // markers: true,
                            scrub: 2,
                        },
                    });

                    tl.fromTo(
                        '.imagepowere1',
                        { opacity: 1, scale: 1 },
                        { opacity: 0, duration: 3, scale: 0 },
                        '+=3',
                    )
                        .fromTo(
                            '.imagepowere2',
                            { opacity: 0, scale: 0 },
                            { opacity: 1, duration: 3, scale: 1 },
                            '<',
                        )
                        .fromTo(
                            '.leftPowered1',
                            { yPercent: 0, zIndex: 5 },
                            { yPercent: -150, duration: 3, zIndex: 5 },
                            '<',
                        )
                        .fromTo(
                            '.imagepowere3',
                            { opacity: 0, scale: 0 },
                            { opacity: 1, duration: 3, scale: 1 },
                            '+=2',
                        )
                        .fromTo(
                            '.imagepowere2',
                            { opacity: 1, scale: 1 },
                            { opacity: 0, duration: 3, scale: 0 },
                            '<',
                        )
                        .fromTo(
                            '.leftPowered2',
                            { yPercent: 0, zIndex: 4 },
                            { yPercent: -150, duration: 3, zIndex: 4 },
                            '<',
                        )
                        .fromTo(
                            '.imagepowere4',
                            { opacity: 0, scale: 0 },
                            { opacity: 1, duration: 3, scale: 1 },
                            '+=3',
                        )
                        .fromTo(
                            '.imagepowere3',
                            { opacity: 1, scale: 1 },
                            { opacity: 0, duration: 3, scale: 0 },
                            '<',
                        )
                        .fromTo(
                            '.leftPowered3',
                            { yPercent: 0, zIndex: 3 },
                            { yPercent: -150, duration: 3, zIndex: 3 },
                            '<',
                        )
                        .fromTo(
                            '.imagepowere5',
                            { opacity: 0, scale: 0 },
                            { opacity: 1, duration: 3, scale: 1 },
                            '+=3',
                        )
                        .fromTo(
                            '.imagepowere4',
                            { opacity: 1, scale: 1 },
                            { opacity: 0, duration: 3, scale: 0 },
                            '<',
                        )
                        .fromTo(
                            '.leftPowered4',
                            { yPercent: 0, zIndex: 2 },
                            { yPercent: -150, duration: 3, zIndex: 2 },
                            '<',
                        );
                }

                if (isDesktop) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: '#powerdOnchain',
                            start: 'top top',
                            end: '+=2500',
                            pin: true,
                            // markers: true,
                            scrub: 2,
                            // toggleActions: 'play none none reverse',
                        },
                    });

                    tl.fromTo(
                        '.imagepowere1',
                        { opacity: 1, scale: 1 },
                        { opacity: 0, duration: 3, scale: 0 },
                        '+=2',
                    )
                        .fromTo(
                            '.imagepowere2',
                            { opacity: 0, scale: 0 },
                            { opacity: 1, duration: 3, scale: 1 },
                            '<',
                        )
                        .fromTo(
                            '.leftPoweredOption',
                            { marginTop: '300px' },
                            { duration: 3, marginTop: '100px' },
                            '<',
                        )
                        .fromTo(
                            '.leftPowered1',
                            {
                                background:
                                    'linear-gradient(245deg, #d9a585 -7.96%,#57169d 46.02%,#000 100%)',
                            },
                            {
                                background:
                                    'linear-gradient(245deg, rgba(255,255,255,0.08) -7.96%, rgba(255,255,255,0.08) 46.02%, rgba(255,255,255,0.08) 100%)',
                                duration: 3,
                            },
                            '<',
                        )
                        .fromTo(
                            '.leftPowered2',
                            {
                                background:
                                    'linear-gradient(245deg, rgba(255,255,255,0.08) -7.96%, rgba(255,255,255,0.08) 46.02%, rgba(255,255,255,0.08) 100%)',
                            },
                            {
                                background:
                                    'linear-gradient(245deg, #d9a585 -7.96%,#57169d 46.02%,#000 100%)',
                                duration: 3,
                            },
                            '<',
                        )
                        .fromTo(
                            '.imagepowere3',
                            { opacity: 0, scale: 0 },
                            { opacity: 1, duration: 3, scale: 1 },
                            '+=2',
                        )
                        .fromTo(
                            '.imagepowere2',
                            { opacity: 1, scale: 1 },
                            { opacity: 0, duration: 3, scale: 0 },
                            '<',
                        )
                        .fromTo(
                            '.leftPoweredOption',
                            { marginTop: '100px' },
                            { duration: 3, marginTop: '-50px' },
                            '<',
                        )
                        .fromTo(
                            '.leftPowered2',
                            {
                                background:
                                    'linear-gradient(245deg, #d9a585 -7.96%,#57169d 46.02%,#000 100%)',
                            },
                            {
                                background:
                                    'linear-gradient(245deg, rgba(255,255,255,0.08) -7.96%, rgba(255,255,255,0.08) 46.02%, rgba(255,255,255,0.08) 100%)',
                                duration: 3,
                            },
                            '<',
                        )
                        .fromTo(
                            '.leftPowered3',
                            {
                                background:
                                    'linear-gradient(245deg, rgba(255,255,255,0.08) -7.96%, rgba(255,255,255,0.08) 46.02%, rgba(255,255,255,0.08) 100%)',
                            },
                            {
                                background:
                                    'linear-gradient(245deg, #d9a585 -7.96%,#57169d 46.02%,#000 100%)',
                                duration: 3,
                            },
                            '<',
                        )
                        .fromTo(
                            '.imagepowere4',
                            { opacity: 0, scale: 0 },
                            { opacity: 1, duration: 3, scale: 1 },
                            '+=2',
                        )
                        .fromTo(
                            '.imagepowere3',
                            { opacity: 1, scale: 1 },
                            { opacity: 0, duration: 3, scale: 0 },
                            '<',
                        )
                        .fromTo(
                            '.leftPoweredOption',
                            { marginTop: '-50px' },
                            { duration: 3, marginTop: '-200px' },
                            '<',
                        )
                        .fromTo(
                            '.leftPowered3',
                            {
                                background:
                                    'linear-gradient(245deg, #d9a585 -7.96%,#57169d 46.02%,#000 100%)',
                            },
                            {
                                background:
                                    'linear-gradient(245deg, rgba(255,255,255,0.08) -7.96%, rgba(255,255,255,0.08) 46.02%, rgba(255,255,255,0.08) 100%)',
                                duration: 3,
                            },
                            '<',
                        )
                        .fromTo(
                            '.leftPowered4',
                            {
                                background:
                                    'linear-gradient(245deg, rgba(255,255,255,0.08) -7.96%, rgba(255,255,255,0.08) 46.02%, rgba(255,255,255,0.08) 100%)',
                            },
                            {
                                background:
                                    'linear-gradient(245deg, #d9a585 -7.96%,#57169d 46.02%,#000 100%)',
                                duration: 3,
                            },
                            '<',
                        )
                        .fromTo(
                            '.imagepowere5',
                            { opacity: 0, scale: 0 },
                            { opacity: 1, duration: 3, scale: 1 },
                            '+=2',
                        )
                        .fromTo(
                            '.imagepowere4',
                            { opacity: 1, scale: 1 },
                            { opacity: 0, duration: 3, scale: 0 },
                            '<',
                        )
                        .fromTo(
                            '.leftPoweredOption',
                            { marginTop: '-200px' },
                            { duration: 3, marginTop: '-350px' },
                            '<',
                        )
                        .fromTo(
                            '.leftPowered4',
                            {
                                background:
                                    'linear-gradient(245deg, #d9a585 -7.96%,#57169d 46.02%,#000 100%)',
                            },
                            {
                                background:
                                    'linear-gradient(245deg, rgba(255,255,255,0.08) -7.96%, rgba(255,255,255,0.08) 46.02%, rgba(255,255,255,0.08) 100%)',
                                duration: 3,
                            },
                            '<',
                        )
                        .fromTo(
                            '.leftPowered5',
                            {
                                background:
                                    'linear-gradient(245deg, rgba(255,255,255,0.08) -7.96%, rgba(255,255,255,0.08) 46.02%, rgba(255,255,255,0.08) 100%)',
                            },
                            {
                                background:
                                    'linear-gradient(245deg, #d9a585 -7.96%,#57169d 46.02%,#000 100%)',
                                duration: 3,
                            },
                            '<',
                        );
                }
            },
        );
    });

    return (
        <section>
            <Divider />
            <div
                id="powerdOnchain"
                className="m:px-5 mx-auto min-h-dvh w-full max-w-[78.75rem] px-4  pb-[5rem] md:px-4 md:pb-[7.5rem] xl:px-0"
            >
                <div className="pt-12 md:pt-8"></div>
                <SectionHeadng title="Built for Every Vision." />
                <SectionHeadng
                    title="Powered by"
                    chirldren={
                        <span className="text-purplevariant">
                            {' '}
                            &nbsp;Onchain.
                        </span>
                    }
                />

                <div className="l:gap-[3.75rem] l:flex-row l:max-h-[600px] mt-8 flex flex-col justify-between overflow-hidden md:gap-8">
                    <div className="relative flex h-fit flex-1 items-center justify-center">
                        <div className="relative -z-10">
                            <img
                                src={powerdOnchainDot}
                                alt="onchainpowerd"
                                width={0}
                                height={600}
                                sizes="100vw"
                                className="l:h-[600px] h-[450px] w-full object-cover object-center"
                            />
                        </div>
                        <div className="imagepowere1 absolute inset-0 !z-20 flex items-center justify-center">
                            <img
                                src={powered1}
                                alt="powered1"
                                width={500}
                                height={500}
                                className="h-full w-full object-contain object-center"
                            />
                        </div>
                        <div className="imagepowere2 absolute inset-0 !z-20 opacity-0">
                            <img
                                src={powered2}
                                alt="powered1"
                                width={500}
                                height={500}
                                className="h-full w-full object-contain object-center"
                            />
                        </div>
                        <div className="imagepowere3 absolute inset-0 !z-20 opacity-0">
                            <img
                                src={powered3}
                                alt="powered1"
                                width={500}
                                height={500}
                                className="h-full w-full object-contain object-center"
                            />
                        </div>
                        <div className="imagepowere4 absolute inset-0 !z-20 opacity-0">
                            <img
                                src={powered4}
                                alt="powered1"
                                width={500}
                                height={500}
                                className="h-full w-full object-contain object-center"
                            />
                        </div>
                        <div className="imagepowere5 absolute inset-0 !z-20 opacity-0">
                            <img
                                src={powered5}
                                alt="powered1"
                                width={500}
                                height={500}
                                className="h-full w-full object-contain object-center"
                            />
                        </div>
                    </div>

                    <div className="leftPoweredOption  l:py-0 l:min-h-full relative flex min-h-[8rem] flex-1 flex-col gap-6 overflow-hidden py-4">
                        <div className="leftPowered1 l:static absolute flex min-h-[6.25rem] w-full gap-3 rounded-xl p-3 md:gap-4 md:px-4 md:py-6">
                            <div className="h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem]">
                                <DefiTrading />
                            </div>
                            <div>
                                <h2 className="font-euclid_medium text-base leading-normal font-medium text-white uppercase md:text-xl md:leading-[1.5rem]">
                                    DeFi & Trading
                                </h2>
                                <p className="text-whitevariant50 font-euclid_regular mt-2 text-xs leading-normal font-normal md:text-base">
                                    Real-time price feeds, risk management, and
                                    automated trading.
                                </p>
                            </div>
                        </div>

                        <div className="leftPowered2  l:static absolute flex w-full gap-3 rounded-xl p-3 md:gap-4 md:px-4 md:py-6">
                            <div className="h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem]">
                                <NFTGaming />
                            </div>
                            <div>
                                <h2 className="font-euclid_medium text-base leading-normal font-medium text-white uppercase md:text-xl md:leading-[1.5rem]">
                                    NFTs & Gaming
                                </h2>
                                <p className="text-whitevariant50 font-euclid_regular mt-2 text-xs leading-normal font-normal md:text-base">
                                    AI-generated randomness, dynamic metadata,
                                    and provable fairness.
                                </p>
                            </div>
                        </div>

                        <div className="leftPowered3 l:static absolute flex min-h-[6.25rem] w-full gap-3 rounded-xl p-3 md:gap-4 md:px-4 md:py-6">
                            <div className="h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem]">
                                <SupplyChain />
                            </div>
                            <div>
                                <h2 className="font-euclid_medium text-base leading-normal font-medium text-white uppercase md:text-xl md:leading-[1.5rem]">
                                    Supply Chain
                                </h2>
                                <p className="text-whitevariant50 font-euclid_regular mt-2 text-xs leading-normal font-normal md:text-base">
                                    Transparent tracking with AI-powered
                                    insights.
                                </p>
                            </div>
                        </div>

                        <div className="leftPowered4 l:static absolute flex min-h-[6.25rem] w-full gap-3 rounded-xl p-3 md:gap-4 md:px-4 md:py-6">
                            <div className="h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem]">
                                <InsuranceRisk />
                            </div>
                            <div>
                                <h2 className="font-euclid_medium text-base leading-normal font-medium text-white uppercase md:text-xl md:leading-[1.5rem]">
                                    Insurance & Risk Assessment
                                </h2>
                                <p className="text-whitevariant50 font-euclid_regular mt-2 text-xs leading-normal font-normal md:text-base">
                                    AI-driven policy execution with instant
                                    claims processing.
                                </p>
                            </div>
                        </div>

                        <div className="leftPowered5 l:static absolute flex min-h-[6.25rem] w-full gap-3 rounded-xl p-3 md:gap-4 md:px-4 md:py-6">
                            <div className="h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem]">
                                <AIWEB3 />
                            </div>
                            <div>
                                <h2 className="font-euclid_medium text-base leading-normal font-medium text-white uppercase md:text-xl md:leading-[1.5rem]">
                                    AI & Web3 Analytics
                                </h2>
                                <p className="text-whitevariant50 font-euclid_regular mt-2 text-xs leading-normal font-normal md:text-base">
                                    Smart contract decision-making powered by
                                    AI-enhanced data.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PowerdOnchain;
