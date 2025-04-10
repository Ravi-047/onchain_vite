import { RiCodeSSlashLine } from 'react-icons/ri';

import loadingLogo from '/assets/loadingLogo.png';
import heroStarBackground from '/assets/heroStarBackground.png';
import heroGradientBackground from '/assets/heroGradientBackground.png';
import heroBlackGradientBackground from '/assets/heroBlackGradientBackground.png';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PrimaryButton from '../components/buttons/PrimaryButton';
import CircleDiamondSVG from '../constants/icon/CircleDiamondSVG';
import EnterprisesRive from '../components/rive/EnterprisesRive';
import EnterprisesIconSVG from '../constants/icon/EnterprisesIconSVG';
import DeveloperRive from '../components/rive/DeveloperRive';
import InvestorRive from '../components/rive/InvestorRive';
import InvestorIconSVG from '../constants/icon/InvestorIconSVG';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroSection = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();

        // mm.add(
        //     {
        //         isDesktop: '(min-width: 992px)',
        //     },
        //     context => {
        //         const { isDesktop } = context.conditions || {};
        // if (isDesktop) {
        const tl = gsap.timeline();
        tl.fromTo(
            '.loadinggradient',
            { width: '0%' },
            { width: '100%', duration: 2, ease: 'power2.inOut' },
        )
            .fromTo(
                '.loadingLogoImage',
                {
                    scale: 1,
                },
                {
                    scale: 0.8,
                    duration: 1,
                    ease: 'power2.inOut',
                },
            )
            .fromTo(
                '.loadignBar',
                {
                    width: '25rem',
                },
                {
                    width: '15rem',
                    duration: 1,
                    ease: 'power2.inOut',
                },
                '<',
            )
            .fromTo(
                '.loadignBarMobile',
                {
                    width: '15rem',
                },
                {
                    width: '10rem',
                    duration: 1,
                    ease: 'power2.inOut',
                },
                '<',
            )
            .fromTo(
                '.loadingScreen',
                { zIndex: '9999', opacity: 1 },
                { zIndex: '-9999', opacity: 0, duration: 1 },
                '<',
            )
            .fromTo(
                '.headingSection',
                {
                    scale: 0.8,
                },
                {
                    scale: 1,
                    duration: 1,
                },
                '<',
            )
            .fromTo(
                '.heroLogoBackground',
                {
                    scale: 1.2,
                    opacity: 1,
                },
                {
                    scale: 1,
                    opacity: 0.1,
                    duration: 1,
                    ease: 'power2.inOut',
                },
                '<',
            )
            .fromTo(
                '.buttonAnimation',
                {
                    maxWidth: '0rem',
                    overflow: 'hidden',
                    padding: '0.9rem 0rem',
                },
                {
                    maxWidth: '21rem',
                    duration: 1,
                    ease: 'power2.inOut',
                    padding: '0.9rem 1.2rem',
                    overflow: 'hidden',
                },
                '<',
            )
            .fromTo(
                '.loadingScreen',
                { position: 'fixed' },
                { position: 'hidden' },
            );
        // }
        // },
        // );

        mm.add(
            {
                isDesktop: '(min-width: 1170px)',
                isTablet: '(min-width:993px) and (max-width:1169px)',
                isMobileBig: '(min-width: 376px) and (max-width: 992px)',
                isMobile: '(max-width: 375px)',
            },
            context => {
                const { isDesktop, isTablet, isMobileBig, isMobile } =
                    context.conditions || {};
                if (isDesktop) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: '.cardHeroSection',
                            start: 'top center',
                            end: '+=1000',
                            scrub: 1,
                            pin: true,
                            // markers: true,
                        },
                    });

                    tl.to('.parentCard', {
                        width: '100%',
                        yPercent: -70,
                        duration: 0.4,
                    })
                        .to(
                            '.enterprisesCard',
                            {
                                rotate: 0,
                                duration: 0.4,
                                top: '0rem',
                                left: '0rem',
                            },
                            '<',
                        )
                        .to(
                            '.investorCard',
                            {
                                rotate: 0,
                                duration: 0.4,
                                top: '0rem',
                                right: '0rem',
                            },
                            '<',
                        )
                        .to(
                            '.enterprisesCard > div, .investorCard > div, .developerCard > div',
                            {
                                paddingTop: '1.5rem',
                                duration: 0.4,
                            },
                            '<',
                        )
                        .to(
                            '.enterprisesCard > div > p, .investorCard > div > p, .developerCard > div > p',
                            {
                                height: 'auto',
                                marginBottom: '0.75rem',
                                duration: 0.4,
                            },
                            '<',
                        );
                }

                if (isTablet) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: '.cardHeroSection',
                            start: 'top center',
                            end: '+=1000',
                            scrub: 1,
                            pin: true,
                            // markers: true,
                        },
                    });
                    tl.to('.parentCard', {
                        width: '60rem',
                        yPercent: -70,
                        duration: 1.5,
                        gap: '1.5rem',
                    })
                        .to(
                            '.enterprisesCard',
                            {
                                rotate: 0,
                                top: '0rem',
                                left: '0rem',
                                maxWidth: '18rem',
                            },
                            '<',
                        )
                        .to(
                            '.investorCard',
                            {
                                rotate: 0,
                                top: '0rem',
                                right: '0rem',
                                maxWidth: '18rem',
                            },
                            '<',
                        )
                        .to(
                            '.developerCard',
                            {
                                maxWidth: '18rem',
                            },
                            '<',
                        )
                        .to(
                            '.enterprisesCard > div, .investorCard > div, .developerCard > div',
                            {
                                paddingTop: '0.75rem',
                                duration: 0.4,
                            },
                            '<',
                        )
                        .to(
                            '.enterprisesCard > div > p, .investorCard > div > p, .developerCard > div > p',
                            {
                                height: 'auto',
                                marginBottom: '0.75rem',
                                duration: 0.4,
                            },
                            '<',
                        );
                }

                if (isMobileBig) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: '.cardHeroSection',
                            start: 'top center',
                            end: '+=1000',
                            scrub: 1,
                            pin: true,
                            // markers: true,
                        },
                    });
                    tl.to('.parentCard', {
                        width: '60rem',
                        yPercent: -70,
                        gap: '1.5rem',
                        duration: 1.5,
                    })
                        .to(
                            '.enterprisesCard',
                            {
                                rotate: 0,
                                top: '0rem',
                                left: '0rem',
                                maxWidth: '18rem',
                            },
                            '<',
                        )
                        .to(
                            '.investorCard',
                            {
                                rotate: 0,
                                top: '0rem',
                                right: '0rem',
                                maxWidth: '18rem',
                            },
                            '<',
                        )
                        .to(
                            '.developerCard',
                            {
                                maxWidth: '18rem',
                            },
                            '<',
                        )
                        .to(
                            '.enterprisesCard > div, .investorCard > div, .developerCard > div',
                            {
                                paddingTop: '0.75rem',
                                duration: 0.4,
                            },
                            '<',
                        )
                        .to(
                            '.enterprisesCard > div > p, .investorCard > div > p, .developerCard > div > p',
                            {
                                height: 'auto',
                                marginBottom: '0.75rem',
                                duration: 0.4,
                            },
                            '<',
                        )
                        .to(
                            '.developerCard, .enterprisesCard, .investorCard',
                            {
                                xPercent: -115,
                                duration: 1.5,
                            },
                            '+=1',
                        )
                        .to('.investorCard, .developerCard, .enterprisesCard', {
                            xPercent: -200,
                            duration: 1.5,
                        });
                }

                if (isMobile) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: '.cardHeroSection',
                            start: 'top center',
                            end: '+=1000',
                            scrub: 1,
                            pin: true,
                            // markers: true,
                        },
                    });
                    tl.to('.parentCard', {
                        width: '60rem',
                        yPercent: -70,
                        gap: '1.5rem',
                        duration: 1.5,
                    })
                        .to(
                            '.enterprisesCard',
                            {
                                rotate: 0,
                                top: '0rem',
                                left: '0rem',
                                maxWidth: '18rem',
                            },
                            '<',
                        )
                        .to(
                            '.investorCard',
                            {
                                rotate: 0,
                                top: '0rem',
                                right: '0rem',
                                maxWidth: '18rem',
                            },
                            '<',
                        )
                        .to(
                            '.developerCard',
                            {
                                maxWidth: '18rem',
                            },
                            '<',
                        )
                        .to(
                            '.enterprisesCard > div, .investorCard > div, .developerCard > div',
                            {
                                paddingTop: '0.75rem',
                                duration: 0.4,
                            },
                            '<',
                        )
                        .to(
                            '.enterprisesCard > div > p, .investorCard > div > p, .developerCard > div > p',
                            {
                                height: 'auto',
                                marginBottom: '0.75rem',
                                duration: 0.4,
                            },
                            '<',
                        )
                        .to(
                            '.developerCard, .enterprisesCard, .investorCard',
                            {
                                xPercent: -115,
                                duration: 1.5,
                            },
                            '+=1',
                        )
                        .to('.investorCard, .developerCard, .enterprisesCard', {
                            xPercent: -115 * 2,
                            duration: 1.5,
                        });
                }
            },
        );
    }, []);

    return (
        <section className="relative overflow-clip">
            <div className="loadingScreen fixed z-[9999] flex  h-screen w-full items-center justify-center bg-[#0c0b1e]">
                <div className="loadingLogoImage flex flex-col items-center justify-center">
                    <div>
                        <img
                            src={loadingLogo}
                            width={350}
                            height={350}
                            className="hidden aspect-square object-contain object-center md:block"
                            alt="loading logo"
                        />
                        <img
                            src={loadingLogo}
                            width={200}
                            height={200}
                            className="aspect-square object-contain object-center md:hidden"
                            alt="loading logo"
                        />
                    </div>
                    <div className="loadignBar invisible mt-8 w-[25rem] md:visible">
                        <div className="h-[0.5rem] rounded-[6.25rem] bg-[#FFFFFF1A] backdrop-blur-[0.30px]">
                            <div className="loadinggradient h-full w-full rounded-[6.25rem]"></div>
                        </div>
                    </div>
                    <div className="loadignBarMobile w-[15rem] md:invisible">
                        <div className="h-[0.5rem] rounded-[6.25rem] bg-[#FFFFFF1A] backdrop-blur-[0.30px]">
                            <div className="loadinggradient h-full w-full rounded-[6.25rem]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="absolute top-0 left-0 -z-10 w-full">
                    <img
                        src={heroStarBackground}
                        alt="heroStar"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-[52.125rem] w-full min-w-[32.4375rem] object-cover object-center md:h-[75.85938rem] md:object-fill"
                    />
                </div>
                <div className="absolute top-0 right-0 -z-10 w-full">
                    <img
                        src={heroGradientBackground}
                        alt="heroGraidient"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-[75.85938rem] w-full min-w-[49.5rem] object-cover"
                    />
                </div>
                <div className="absolute top-0 z-[1] w-full">
                    <img
                        src={heroBlackGradientBackground}
                        alt="heroBlackGraidient"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-[76.8125rem] w-full min-w-[65rem] object-cover"
                    />
                </div>

                <div className="m:px-5 mainHeroSection relative z-20 mx-auto min-h-dvh w-full max-w-[78.75rem] px-4 pt-[14.5rem] md:px-4  xl:px-0">
                    <div className="headingSection relative flex items-center justify-center">
                        <div className="heroLogoBackground l:block absolute top-[-6rem] -ml-4 hidden">
                            <img
                                src={loadingLogo}
                                width={350}
                                height={350}
                                className="aspect-square object-contain object-center"
                                alt="loading logo"
                            />
                        </div>
                        <div className="relative z-40 flex flex-col items-center gap-5">
                            <p className="text-whitevariant80 font-euclid_regular text-center text-sm leading-[1.25rem] font-normal tracking-[1rem] uppercase md:text-base">
                                ON CHAIN AI
                            </p>
                            <h1 className="font-euclid_medium w-full max-w-[21rem] text-center text-4xl leading-normal font-medium text-white md:max-w-[48.0625rem] md:text-[5rem] md:leading-[5.1rem] md:-tracking-[0.125rem]">
                                Bringing AI <br className=" md:hidden" /> On
                                chain
                            </h1>
                            <p className="text-whitevariant60 font-euclid_regular w-full max-w-[21rem] text-center text-base leading-normal font-normal md:max-w-[53.75rem] md:text-2xl md:leading-[2.625rem]">
                                Traditional Oracles Are Slowing Down Your
                                Project.{' '}
                                <span className="text-white">Onchain</span> AI
                                Delivers Fast, Secure, and AI-Verified Data;
                                without the Risks
                            </p>

                            <PrimaryButton
                                text="LEARN MORE"
                                icon={<CircleDiamondSVG color="white" />}
                                iconClassName="-mt-[2px]"
                                containerClassName="bg-purplevariant60 w-full max-w-[21rem] md:w-auto"
                                textClassName="text-white"
                                animationClass="buttonAnimation"
                            />
                        </div>
                    </div>

                    <div className="cardHeroSection headingSection border border-transparent ">
                        <div className="parentCard relative mx-auto mt-[7.5rem] flex w-fit flex-wrap items-center justify-center  gap-[2.9375rem] border border-transparent xl:flex-nowrap">
                            {/* left card  */}
                            <div className="borderGradient enterprisesCard xlg:max-w-[24.5rem] xlg:min-w-[24.5rem] xlg:p-[3px] xlg:left-[-18rem] absolute top-[5rem] left-[-11rem] w-full max-w-[15rem] min-w-[15rem] rotate-[-15deg] overflow-hidden rounded-2xl p-[2px]">
                                <div className="xlg:p-6 xlg:pt-0 w-full overflow-hidden rounded-2xl bg-black p-0 pb-3 backdrop-blur-[35px]">
                                    <p className="textGradient font-euclid_medium h-0 text-center text-xl leading-normal font-medium tracking-[0.0705rem] uppercase md:text-2xl">
                                        FOR ENTERPRISES
                                    </p>
                                    <div className="h-[19.5rem] w-full rounded-2xl">
                                        <EnterprisesRive />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <PrimaryButton
                                            text="Request Demo"
                                            icon={<EnterprisesIconSVG />}
                                            iconClassName="-mt-[1px]"
                                            containerClassName="bg-purplevariant60 border border-purplevariant"
                                            textClassName="text-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* middle card  */}
                            <div className="borderGradient developerCard xlg:max-w-[24.5rem] xlg:min-w-[24.5rem] xlg:p-[3px] relative z-30 w-full max-w-[15rem] min-w-[15rem] overflow-hidden rounded-2xl p-[2px]">
                                <div className=" xlg:p-6 xlg:pt-0 w-full overflow-hidden rounded-2xl bg-black p-0 pb-3 backdrop-blur-[35px]">
                                    <p className="textGradient font-euclid_medium  h-0 text-center text-xl leading-normal font-medium tracking-[0.0705rem] uppercase md:text-2xl">
                                        FOR DEVELOPERS
                                    </p>
                                    <div className="h-[19.5rem] w-full rounded-2xl">
                                        <DeveloperRive />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <PrimaryButton
                                            text="Build Now"
                                            icon={<RiCodeSSlashLine />}
                                            iconClassName="-mt-[1px]"
                                            containerClassName="bg-purplevariant60 border border-purplevariant"
                                            textClassName="text-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* right card  */}
                            <div className="borderGradient investorCard xlg:max-w-[24.5rem] xlg:min-w-[24.5rem] xlg:p-[3px] xlg:right-[-18rem] absolute top-[5rem] right-[-11rem] w-full max-w-[15rem] min-w-[15rem]  rotate-[15deg] overflow-hidden rounded-2xl p-[2px]">
                                <div className=" xlg:p-6 xlg:pt-0 w-full overflow-hidden rounded-2xl bg-black p-3 backdrop-blur-[35px]">
                                    <p className="textGradient font-euclid_medium h-0 text-center text-xl leading-normal font-medium tracking-[0.0705rem] uppercase md:text-2xl">
                                        FOR INVESTORS
                                    </p>
                                    <div className=" h-[19.5rem] w-full rounded-2xl">
                                        <InvestorRive />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <PrimaryButton
                                            text="Read Whitepaper"
                                            icon={<InvestorIconSVG />}
                                            iconClassName="-mt-[1px]"
                                            containerClassName="bg-purplevariant60 border border-purplevariant"
                                            textClassName="text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
