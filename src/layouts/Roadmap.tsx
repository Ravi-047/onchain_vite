import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Divider from '../components/ui/Divider';
import SectionHeadng from '../components/ui/SectionHeadng';
import Roadmap1Rive from '../components/rive/Roadmap1Rive';
import RoadmapProgressIcon from '../constants/icon/RoadmapProgressIcon';
import Roadmap2Rive from '../components/rive/Roadmap2Rive';
import Roadmap3Rive from '../components/rive/Roadmap3Rive';
import Roadmap4Rive from '../components/rive/Roadmap4Rive';
import PrimaryButton from '../components/buttons/PrimaryButton';
import RoadmapWhitepaperIconSVG from '../constants/icon/RoadmapWhitepaperIconSVG';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Roadmap = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                isDesktop: '(min-width: 1121px)',
                isTablet: '(min-width:769px) and (max-width:1120px)',
                isMobileBig: '(min-width:375px) and (max-width:768px)',
                isMobile: '(max-width: 374px)',
            },
            context => {
                const { isDesktop, isMobile, isMobileBig, isTablet } =
                    context.conditions || {};

                if (isDesktop) {
                    const tl = gsap.timeline();
                    tl.fromTo(
                        '.roadmapCard',
                        {
                            xPercent: 17,
                            duration: 1.5,
                            ease: 'power1.out',
                        },
                        {
                            xPercent: 17,
                            duration: 1.5,
                            ease: 'power1.out',
                        },
                    )
                        .fromTo(
                            '.roadmapCard',
                            {
                                xPercent: 17,
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                xPercent: -12,
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '+=2',
                        )
                        .fromTo(
                            '.roadmapProgressBar',
                            {
                                width: '90%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                width: '0%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard1, .roadmapCard3',
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard2',
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },

                            '<',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                xPercent: -11,
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                xPercent: -40,
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '+=2',
                        )
                        .fromTo(
                            '.roadmapProgressBar2',
                            {
                                width: '90%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                width: '0%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard2',
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard3',
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },

                            '<',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                xPercent: -40,
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                xPercent: -68,
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '+=2',
                        )
                        .fromTo(
                            '.roadmapProgressBar3',
                            {
                                width: '90%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                width: '0%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard3',
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard4',
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },

                            '<',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            '+=2',
                        );

                    ScrollTrigger.create({
                        animation: tl,
                        trigger: '.roadmap',
                        start: 'top 15%',
                        end: '+=2200',
                        scrub: 2,
                        pin: true,
                        anticipatePin: 1,
                        // markers: true,
                    });
                }

                if (isTablet) {
                    const tl = gsap.timeline();
                    tl.fromTo(
                        '.roadmapCard',
                        {
                            xPercent: 8,
                            duration: 1.5,
                            ease: 'power1.out',
                        },
                        {
                            xPercent: 8,
                            duration: 1.5,
                            ease: 'power1.out',
                        },
                        '+=2',
                    )

                        .fromTo(
                            '.roadmapCard',
                            {
                                xPercent: 8,
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            {
                                xPercent: -22,
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                        )
                        .fromTo(
                            '.roadmapProgressBar',
                            {
                                width: '90%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                width: '0%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard1, .roadmapCard3',
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard2',
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },

                            '<',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            '+=2',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                xPercent: -22,
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            {
                                xPercent: -50,
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                        )
                        .fromTo(
                            '.roadmapProgressBar2',
                            {
                                width: '90%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                width: '0%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard2',
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard3',
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },

                            '<',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                xPercent: -50,
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                xPercent: -78,
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '+=2',
                        )
                        .fromTo(
                            '.roadmapProgressBar3',
                            {
                                width: '90%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                width: '0%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard3',
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard4',
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },

                            '<',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            '+=2',
                        );
                    ScrollTrigger.create({
                        animation: tl,
                        trigger: '.roadmap',
                        start: 'top 15%',
                        end: '+=1000',
                        scrub: true,
                        pin: true,
                        // markers: true,
                    });
                }

                if (isMobileBig) {
                    const tl = gsap.timeline();
                    tl.fromTo(
                        '.roadmapCard',
                        {
                            xPercent: 0,
                            duration: 1.5,
                            ease: 'power1.out',
                        },
                        {
                            xPercent: 0,
                            duration: 1.5,
                            ease: 'power1.out',
                        },
                        '+=2',
                    )

                        .fromTo(
                            '.roadmapCard',
                            {
                                xPercent: 0,
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            {
                                xPercent: -26,
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                        )
                        .fromTo(
                            '.roadmapProgressBar',
                            {
                                width: '90%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                width: '0%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard1, .roadmapCard3',
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard2',
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },

                            '<',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            '+=2',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                xPercent: -26,
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            {
                                xPercent: -52,
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                        )
                        .fromTo(
                            '.roadmapProgressBar2',
                            {
                                width: '90%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                width: '0%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard2',
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard3',
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },

                            '<',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                xPercent: -52,
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                xPercent: -77,
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '+=2',
                        )
                        .fromTo(
                            '.roadmapProgressBar3',
                            {
                                width: '90%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                width: '0%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard3',
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard4',
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },

                            '<',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            '+=2',
                        );
                    ScrollTrigger.create({
                        animation: tl,
                        trigger: '.roadmap',
                        start: 'top 15%',
                        end: '+=1000',
                        scrub: true,
                        pin: true,
                        // markers: true,
                    });
                }

                if (isMobile) {
                    const tl = gsap.timeline();
                    tl.fromTo(
                        '.roadmapCard',
                        {
                            duration: 1.5,
                            ease: 'power1.out',
                        },
                        {
                            duration: 1.5,
                            ease: 'power1.out',
                        },
                        '+=2',
                    )

                        .fromTo(
                            '.roadmapCard',
                            {
                                xPercent: 0,
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            {
                                xPercent: -23.5,
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                        )
                        .fromTo(
                            '.roadmapProgressBar',
                            {
                                width: '90%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                width: '0%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard1, .roadmapCard3',
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard2',
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },

                            '<',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            '+=2',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                xPercent: -23.5,
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            {
                                xPercent: -47.5,
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                        )
                        .fromTo(
                            '.roadmapProgressBar2',
                            {
                                width: '90%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                width: '0%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard2',
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard3',
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },

                            '<',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                xPercent: -47.5,
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                xPercent: -72,
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '+=2',
                        )
                        .fromTo(
                            '.roadmapProgressBar3',
                            {
                                width: '90%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                width: '0%',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard3',
                            {
                                background:
                                    'linear-gradient(242deg, #ffceb0 1.33%,rgba(112, 35, 195, 0.5) 50.67%, rgba(0, 0, 0, 0) 100%)',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            {
                                background: '#909090',
                                duration: 2.5,
                                ease: 'power1.out',
                            },
                            '<',
                        )
                        .fromTo(
                            '.roadmapCard',
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            {
                                duration: 1.5,
                                ease: 'power1.out',
                            },
                            '+=2',
                        );
                    ScrollTrigger.create({
                        animation: tl,
                        trigger: '.roadmap',
                        start: 'top 15%',
                        end: '+=1000',
                        scrub: true,
                        pin: true,
                        // markers: true,
                    });
                }
            },
        );
    });

    return (
        <section className="overflow-clip">
            <Divider />
            <div className="m:px-5 mx-auto min-h-[100vh] w-full max-w-[78.75rem] px-4  py-[5rem] md:min-h-dvh md:px-4 md:py-[7.5rem] xl:px-0">
                <div className="flex items-center justify-center">
                    <SectionHeadng title="Roadmap" />
                </div>
                <div className="mt-20"></div>
                <div className="roadmap ">
                    <div className=" roadmapCard relative flex w-[158rem]">
                        {/* card 1 */}
                        <div className="roadmapLinearGradient  roadmapCard1  m:max-w-[24.5rem]  m:min-w-[24.5rem] xlg:p-[4px] s:max-w-[21rem] w-full max-w-[18rem] rounded-2xl p-[2px]">
                            <div className="roadmapSecondLinearGradient xlg:p-6 h-full min-h-[30.375rem]  w-full rounded-2xl bg-[#17162c] p-3">
                                <div className="h-[19.5rem] w-full">
                                    <Roadmap1Rive />
                                </div>
                                <h3 className="text-whitevariant80 font-euclid_medium mt-4 text-center text-xl leading-normal font-medium md:text-2xl md:leading-[1.4rem]">
                                    Phase-1
                                </h3>

                                <p className="text-whitevariant80 font-euclid_light mt-3 text-center text-sm leading-[1.4rem] font-light md:text-base">
                                    Discover how AI seamlessly collects and
                                    verifies off-chain data to enhance
                                    decision-making and improve operational
                                    efficiency.
                                </p>
                            </div>
                        </div>

                        {/* progress bar */}
                        <div className="flex items-center justify-center">
                            <div className="bg-purplevariant flex h-[0.125rem] w-[20rem] justify-end">
                                <div className="bg-whiteneutral roadmapProgressBar relative h-full w-[90%]">
                                    <div className="absolute  left-0  -translate-x-1/2 -translate-y-1/2">
                                        <RoadmapProgressIcon />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className="bg-grayvariant roadmapCard2 m:max-w-[24.5rem]  m:min-w-[24.5rem] xlg:p-[4px] s:max-w-[21rem] w-full max-w-[18rem] rounded-2xl p-[2px]">
                            <div className="roadmapSecondLinearGradient xlg:p-6 h-full min-h-[30.375rem] w-full rounded-2xl bg-[#17162c] p-3">
                                <div className="h-[19.5rem] w-full">
                                    <Roadmap2Rive />
                                </div>
                                <h3 className="text-whitevariant80 font-euclid_medium mt-4 text-center text-xl leading-normal font-medium md:text-2xl md:leading-[1.4rem]">
                                    Phase-2
                                </h3>

                                <p className="text-whitevariant80 font-euclid_light mt-3 text-center text-sm leading-[1.4rem] font-light md:text-base">
                                    Discover how AI seamlessly collects and
                                    verifies off-chain data to enhance
                                    decision-making and improve operational
                                    efficiency.
                                </p>
                            </div>
                        </div>

                        {/* progress bar */}
                        <div className="flex items-center justify-center">
                            <div className="bg-purplevariant flex h-[0.125rem] w-[20rem] justify-end">
                                <div className="bg-whiteneutral roadmapProgressBar2 relative h-full w-[90%]">
                                    <div className="absolute  left-0 -translate-x-1/2 -translate-y-1/2">
                                        <RoadmapProgressIcon />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div className="bg-grayvariant roadmapCard3 m:max-w-[24.5rem]  m:min-w-[24.5rem] xlg:p-[4px] s:max-w-[21rem] w-full max-w-[18rem] rounded-2xl p-[2px]">
                            <div className="roadmapSecondLinearGradient xlg:p-6 h-full min-h-[30.375rem] w-full rounded-2xl bg-[#17162c] p-3">
                                <div className="h-[19.5rem] w-full">
                                    <Roadmap3Rive />
                                </div>
                                <h3 className="text-whitevariant80 font-euclid_medium mt-4 text-center text-xl leading-normal font-medium md:text-2xl md:leading-[1.4rem]">
                                    Phase-3
                                </h3>

                                <p className="text-whitevariant80 font-euclid_light mt-3 text-center text-sm leading-[1.4rem] font-light md:text-base">
                                    Discover how AI seamlessly collects and
                                    verifies off-chain data to enhance
                                    decision-making and improve operational
                                    efficiency.
                                </p>
                            </div>
                        </div>

                        {/* progress bar */}
                        <div className="flex items-center justify-center">
                            <div className="bg-purplevariant flex h-[0.125rem] w-[20rem] justify-end">
                                <div className="bg-whiteneutral roadmapProgressBar3 relative h-full w-[90%]">
                                    <div className="absolute  left-0 -translate-x-1/2 -translate-y-1/2">
                                        <RoadmapProgressIcon />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* card 4 */}
                        <div className="bg-grayvariant roadmapCard4 m:max-w-[24.5rem]  m:min-w-[24.5rem] xlg:p-[4px] s:max-w-[21rem] w-full max-w-[18rem] rounded-2xl p-[2px]">
                            <div className="roadmapSecondLinearGradient xlg:p-6 h-full min-h-[30.375rem] w-full rounded-2xl bg-[#17162c] p-3">
                                <div className="h-[19.5rem] w-full">
                                    <Roadmap4Rive />
                                </div>
                                <h3 className="text-whitevariant80 font-euclid_medium mt-4 text-center text-xl leading-normal font-medium md:text-2xl md:leading-[1.4rem]">
                                    Phase-4
                                </h3>

                                <p className="text-whitevariant80 font-euclid_light mt-3 text-center text-sm leading-[1.4rem] font-light md:text-base">
                                    Discover how AI seamlessly collects and
                                    verifies off-chain data to enhance
                                    decision-making and improve operational
                                    efficiency.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 flex items-center justify-center">
                        <PrimaryButton
                            text="Request Demo"
                            icon={<RoadmapWhitepaperIconSVG />}
                            iconClassName="-mt-[1px]"
                            containerClassName="bg-purplevariant60 border border-purplevariant max-w-[21rem] w-full md:w-auto"
                            textClassName="text-white"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
