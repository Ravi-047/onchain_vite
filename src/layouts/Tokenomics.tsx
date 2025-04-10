import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Divider from '../components/ui/Divider';
import SectionHeadng from '../components/ui/SectionHeadng';

import tokenomicsBackgroundImage from '/assets/tokenomicsBackgroundImage.png';
import ArrowTopTopPetal1 from '../constants/icon/tokenomicsIcon/ArrowTopTopPetal1';
import MobileArrowTopTopPetal1 from '../constants/icon/tokenomicsMobileIcon/MobileArrowTopTopPetal1';
import TopPetal1 from '../constants/icon/tokenomicsIcon/TopPetal1';
import { TopPetal1Mobile } from '../constants/icon/tokenomicsMobileIcon/TopPetal1Mobile';
import ArrowMiddleTopPetal2 from '../constants/icon/tokenomicsIcon/ArrowMiddleTopPetal2';
import MobileArrowMiddleTopPetal2 from '../constants/icon/tokenomicsMobileIcon/MobileArrowMiddleTopPetal2';
import TopPetal2 from '../constants/icon/tokenomicsIcon/TopPetal2';
import TopPetal2Mobile from '../constants/icon/tokenomicsMobileIcon/TopPetal2Mobile';
import ArrowBottomTopPetal3 from '../constants/icon/tokenomicsIcon/ArrowBottomTopPetal3';
import MobileArrowBottomTopPetal3 from '../constants/icon/tokenomicsMobileIcon/MobileArrowBottomTopPetal3';
import TopPetal3 from '../constants/icon/tokenomicsIcon/TopPetal3';
import TopPetal3Mobile from '../constants/icon/tokenomicsMobileIcon/TopPetal3Mobile';
import MiddlePetal from '../constants/icon/tokenomicsIcon/MiddlePetal';
import MiddlePetalMobile from '../constants/icon/tokenomicsMobileIcon/MiddlePetalMobile';
import ArrowTopBottomPetal3 from '../constants/icon/tokenomicsIcon/ArrowTopBottomPetal3';
import MobileArrowBottomBottomPetal3 from '../constants/icon/tokenomicsMobileIcon/MobileArrowBottomBottomPetal3';
import BottomPeetal3 from '../constants/icon/tokenomicsIcon/BottomPeetal3';
import BottomPetal3Mobile from '../constants/icon/tokenomicsMobileIcon/BottomPetal3Mobile';
import ArrowMiddleBottomPetal2 from '../constants/icon/tokenomicsIcon/ArrowMiddleBottomPetal2';
import MobileArrowMiddleBottomPetal2 from '../constants/icon/tokenomicsMobileIcon/MobileArrowMiddleBottomPetal2';
import BottomPetal2 from '../constants/icon/tokenomicsIcon/BottomPetal2';
import BottomPetal2Mobile from '../constants/icon/tokenomicsMobileIcon/BottomPetal2Mobile';
import ArrowBottomBottomPetal1 from '../constants/icon/tokenomicsIcon/ArrowBottomBottomPetal1';
import MobileArrowBottomBottomPetal1 from '../constants/icon/tokenomicsMobileIcon/MobileArrowBottomBottomPetal1';
import BottomPetal1 from '../constants/icon/tokenomicsIcon/BottomPetal1';
import BottomPetal1Mobile from '../constants/icon/tokenomicsMobileIcon/BottomPetal1Mobile';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Tokenomics = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                isDesktop: '(min-width: 1121px)',
                isMobile: '(max-width: 1120px)',
            },
            context => {
                const { isDesktop, isMobile } = context.conditions || {};

                // const createScrollTrigger = (triggerClass, animation,start, end) => {
                //     ScrollTrigger.create({
                //         animation:animation,
                //         trigger:triggerClass,
                //         start:start,
                //         end:end,
                //         scrub: 3,
                //         pin: true,
                //         anticipatePin: 1,
                //         pinSpacing: true,
                //     })
                // }

                if (isMobile) {
                    const tl = gsap.timeline();

                    tl.to(
                        '.topPetal1',

                        {
                            marginBottom: '-0.7rem',
                            marginRight: '-6.5rem',
                            duration: 1,
                        },
                        '+=2',
                    )
                        .to(
                            '.topPetal2',
                            {
                                marginBottom: '-2.3rem',
                                marginRight: '-4rem',
                                duration: 1,
                            },
                            '<',
                        )
                        .to(
                            '.topPetal3',
                            {
                                marginBottom: '-5rem',
                                marginRight: '-1rem',
                                duration: 1,
                            },
                            '<',
                        )
                        .to(
                            '.bottomPetal1',
                            {
                                marginTop: '-2rem',
                                marginLeft: '-4rem',
                                duration: 1,
                            },
                            '<',
                        )
                        .to(
                            '.bottomPetal2',
                            {
                                marginTop: '-3.3rem',
                                marginLeft: '-2rem',
                                duration: 1,
                            },
                            '<',
                        )
                        .to(
                            '.bottomPetal3',

                            {
                                marginTop: '-4.8rem',
                                marginLeft: '-0.4rem',
                                duration: 1,
                            },
                            '<',
                        )
                        .to(
                            '.petalArrow',
                            {
                                opacity: 1,
                            },
                            '+=1',
                        )
                        .to(
                            '.petalStroke',
                            {
                                strokeWidth: 2,
                            },
                            '<',
                        )
                        .to('.topPetalText', {
                            width: 'auto',
                        })
                        .to(
                            '.topPetalText',
                            {
                                duration: 1,
                            },
                            '+=2',
                        );
                    ScrollTrigger.create({
                        animation: tl,
                        trigger: '.tokenomicsMobile',
                        start: 'top top',
                        end: '+=800',
                        scrub: 3,
                        pin: true,
                        anticipatePin: 1,
                        pinSpacing: true,
                        // markers: true,
                        invalidateOnRefresh: true,
                    });
                }

                if (isDesktop) {
                    const tl = gsap.timeline();
                    tl.to(
                        '.topPetal1',
                        {
                            marginBottom: '-1.5rem',
                            marginRight: '-8rem',
                            duration: 1,
                        },
                        '+=2',
                    )
                        .to(
                            '.topPetal2',
                            {
                                marginBottom: '-5rem',
                                marginRight: '-5rem',
                                duration: 1,
                            },
                            '<',
                        )
                        .to(
                            '.topPetal3',
                            {
                                marginBottom: '-11rem',
                                duration: 1,
                            },
                            '<',
                        )
                        .to(
                            '.bottomPetal1',
                            {
                                marginTop: '-3.5rem',
                                marginLeft: '-5rem',
                                duration: 1,
                            },
                            '<',
                        )
                        .to(
                            '.bottomPetal2',
                            {
                                marginTop: '-7rem',
                                marginLeft: '-2rem',
                                duration: 1,
                            },
                            '<',
                        )
                        .to(
                            '.bottomPetal3',
                            {
                                marginTop: '-10rem',
                                marginLeft: '0rem',
                                duration: 1,
                            },
                            '<',
                        )
                        .to(
                            '.petalArrow',
                            {
                                opacity: 1,
                            },
                            '+=1',
                        )
                        .to(
                            '.petalStroke',
                            {
                                strokeWidth: 4,
                            },
                            '<',
                        )
                        .to('.topPetalText', {
                            width: 'auto',
                        })
                        .to(
                            '.topPetalText',
                            {
                                duration: 1,
                            },
                            '+=2',
                        );

                    ScrollTrigger.create({
                        animation: tl,
                        trigger: '.tokenomics',
                        start: 'top top',
                        end: '+=1500',
                        scrub: 3,
                        pin: true,
                        anticipatePin: 1,
                        pinSpacing: true,
                        invalidateOnRefresh: true,
                        // markers: true,
                    });
                }
            },
        );
    }, []);

    return (
        <div className="tokenomicsMobile w-full">
            <section className=" relative overflow-hidden">
                <Divider />
                <div className="m:px-5 xlg:min-h-dhv  mx-auto min-h-[100vh] w-full  max-w-[78.75rem] px-4 py-[5rem] md:px-4 md:py-[7.5rem] xl:px-0">
                    <div className="relative z-20 flex items-center justify-center">
                        <SectionHeadng title="Tokenomics" />
                    </div>
                    <div className="xlg:mt-[7.5rem] mt-20"></div>

                    <div className="tokenomics">
                        <div className=" xlg:min-h-[46rem]  xlg:pt-20 relative  flex min-h-[25rem] items-center justify-center">
                            <div className="absolute inset-0 top-[60%] left-1/2 -z-[99] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                                <img
                                    src={tokenomicsBackgroundImage}
                                    alt="tokneomics image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="h-[100rem] w-[100rem]"
                                />
                            </div>
                            <div className=" relative z-40 flex w-fit flex-col items-center justify-center">
                                <div className="topPetal1 topPetal1 xlg:-mr-[2rem] xlg:-mb-[5rem] relative z-30 -mr-[0rem] -mb-[2.5rem]">
                                    <div className="xlg:top-[0.8rem] xlg:-left-[18.5rem] absolute top-1 -left-[100%] -z-10 flex items-center gap-4">
                                        <div className="topPetalText absolute right-[105%] w-0 overflow-hidden">
                                            <p className="font-euclid_regular xlg:text-xl xlg:leading-[1.125rem] text-[0.5625rem] leading-[0.5625rem] font-normal text-white uppercase">
                                                Liquidity
                                            </p>
                                            <p className="font-euclid_regular xlg:text-2xl text-xs leading-normal font-normal text-white uppercase">
                                                20%
                                            </p>
                                        </div>
                                        <div className="xlg:block hidden">
                                            <ArrowTopTopPetal1 />
                                        </div>
                                        <div className="xlg:hidden">
                                            <MobileArrowTopTopPetal1 />
                                        </div>
                                    </div>
                                    <div className="xlg:block hidden">
                                        <TopPetal1 />
                                    </div>
                                    <div className="xlg:hidden">
                                        <TopPetal1Mobile />
                                    </div>
                                </div>

                                <div className="topPetal2 xlg:-mr-[1.5rem] xlg:-mb-[9rem] relative z-20 -mr-[0.5rem] -mb-[4.8rem]">
                                    <div className="xlg:top-[2.6rem] xlg:-left-[20.5rem] absolute top-4 -left-[60%] -z-10 flex items-center gap-4">
                                        <div className="topPetalText absolute top-full right-[105%] w-0 overflow-hidden">
                                            <p className="font-euclid_regular xlg:text-xl xlg:leading-[1.125rem] text-[0.5625rem] leading-[0.5625rem] font-normal text-white uppercase">
                                                Liquidity
                                            </p>
                                            <p className="font-euclid_regular xlg:text-2xl leading-normalfont-normal text-xs text-white uppercase">
                                                20%
                                            </p>
                                        </div>
                                        <div className="xlg:block hidden">
                                            <ArrowMiddleTopPetal2 />
                                        </div>
                                        <div className="xlg:hidden">
                                            <MobileArrowMiddleTopPetal2 />
                                        </div>
                                    </div>
                                    <div className="xlg:block hidden">
                                        <TopPetal2 />
                                    </div>
                                    <div className="xlg:hidden">
                                        <TopPetal2Mobile />
                                    </div>
                                </div>

                                <div className="topPetal3 xlg:-mb-[13rem] relative z-10 -mr-[0.5rem] -mb-[6rem]">
                                    <div className="xlg:top-[5rem] xlg:-left-[16.4rem] absolute top-8 -left-[35%] -z-10 flex items-center gap-4">
                                        <div className="topPetalText absolute top-full right-[105%] w-0 overflow-hidden">
                                            <p className="font-euclid_regular xlg:text-xl xlg:leading-[1.125rem] leading-[0.5625rem]font-normal text-[0.5625rem] text-white uppercase">
                                                Liquidity
                                            </p>
                                            <p className="font-euclid_regular xlg:text-2xl leading-normalfont-normal text-xs text-white uppercase">
                                                20%
                                            </p>
                                        </div>
                                        <div className="xlg:block hidden">
                                            <ArrowBottomTopPetal3 />
                                        </div>
                                        <div className="xlg:hidden">
                                            <MobileArrowBottomTopPetal3 />
                                        </div>
                                    </div>
                                    <div className="xlg:block hidden">
                                        <TopPetal3 />
                                    </div>
                                    <div className="xlg:hidden">
                                        <TopPetal3Mobile />
                                    </div>
                                </div>

                                <div className="relative z-0 w-fit">
                                    <div className="xlg:block hidden">
                                        <MiddlePetal />
                                    </div>

                                    <div className="xlg:hidden">
                                        <MiddlePetalMobile />
                                    </div>
                                </div>

                                <div className="bottomPetal3 xlg:-mt-[12.2rem] xlg:-ml-[0.3rem] relative z-10 -mt-[6rem] -ml-[0.4rem]">
                                    <div className="xlg:-top-[2.5rem] xlg:-right-[15.7rem] absolute top-0.5 -right-[20%] -z-10 flex items-center gap-4">
                                        <div className="xlg:block hidden">
                                            <ArrowTopBottomPetal3 />
                                        </div>
                                        <div className="xlg:hidden">
                                            <MobileArrowBottomBottomPetal3 />
                                        </div>
                                        <div className="topPetalText absolute -top-3 left-[105%] w-0 overflow-hidden">
                                            <p className="font-euclid_regular xlg:text-xl xlg:leading-[1.125rem] text-[0.5625rem] leading-[0.5625rem] font-normal text-white uppercase">
                                                Liquidity
                                            </p>
                                            <p className="font-euclid_regular xlg:text-2xl text-xs leading-normal font-normal text-white uppercase">
                                                20%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="xlg:block hidden">
                                        <BottomPeetal3 />
                                    </div>
                                    <div className="xlg:hidden">
                                        <BottomPetal3Mobile />
                                    </div>
                                </div>

                                <div className="bottomPetal2 xlg:-mt-[10.7rem] xlg:-ml-[0.5rem] relative z-20 -mt-[5.8rem] -ml-[0.1rem]">
                                    <div className="xlg:top-[0.5rem] xlg:-right-[18rem] absolute top-6 -right-[33%] -z-10 flex items-center gap-4">
                                        <div className="xlg:block hidden">
                                            <ArrowMiddleBottomPetal2 />
                                        </div>
                                        <div className="xlg:hidden">
                                            <MobileArrowMiddleBottomPetal2 />
                                        </div>
                                        <div className="topPetalText absolute -top-3 left-[105%] w-0 overflow-hidden">
                                            <p className="font-euclid_regular xlg:text-xl xlg:leading-[1.125rem] text-[0.5625rem] leading-[0.5625rem] font-normal text-white uppercase">
                                                Liquidity
                                            </p>
                                            <p className="font-euclid_regular xlg:text-2xl text-xs leading-normal font-normal text-white uppercase">
                                                20%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="xlg:block hidden">
                                        <BottomPetal2 />
                                    </div>
                                    <div className="xlg:hidden">
                                        <BottomPetal2Mobile />
                                    </div>
                                </div>

                                <div className="bottomPetal1 xlg:-mt-[7.5rem] xlg:-ml-[2rem] relative z-30 -mt-[3.8rem] -ml-[0.3rem]">
                                    <div className="xlg:top-[4.5rem] xlg:-right-[14.5rem] absolute top-8 -right-[40%] -z-10 flex items-center gap-4">
                                        <div className="xlg:block hidden">
                                            <ArrowBottomBottomPetal1 />
                                        </div>
                                        <div className="xlg:hidden">
                                            <MobileArrowBottomBottomPetal1 />
                                        </div>
                                        <div className="topPetalText xlg:top-0 absolute left-[105%] w-0  overflow-hidden">
                                            <p className="font-euclid_regular xlg:text-xl xlg:leading-[1.125rem] text-[0.5625rem] leading-[0.5625rem] font-normal text-white uppercase">
                                                Liquidity
                                            </p>
                                            <p className="font-euclid_regular xlg:text-2xl text-xs leading-normal font-normal text-white uppercase">
                                                20%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="xlg:block hidden">
                                        <BottomPetal1 />
                                    </div>
                                    <div className="xlg:hidden">
                                        <BottomPetal1Mobile />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tokenomics;
