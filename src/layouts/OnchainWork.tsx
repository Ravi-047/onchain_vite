import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useState } from 'react';
import Divider from '../components/ui/Divider';
import SectionHeadng from '../components/ui/SectionHeadng';
import StepIconSVG from '../constants/icon/StepIconSVG';
import HowitWork1Rive from '../components/rive/HowitWork1Rive';
import HowitWork2Rive from '../components/rive/HowitWork2Rive';
import HowitWork3Rive from '../components/rive/HowitWork3Rive';
import HowitWork4Rive from '../components/rive/HowitWork4Rive';
import { cn } from '../lib/tailwindMerge';
import PrimaryButton from '../components/buttons/PrimaryButton';
import CircleDiamondSVG from '../constants/icon/CircleDiamondSVG';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const OnchainWork = () => {
    const [showButton, setShowButton] = useState(false);
    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                isDesktop: '(min-width: 768px)',
                isMobile: '(max-width: 767px)',
            },
            context => {
                const { isDesktop, isMobile } = context.conditions || {};

                if (isDesktop) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: '.onchainWorkContainer',
                            start: 'top top',
                            end: '+=3350',
                            pin: true,
                            pinSpacing: false,
                            // markers: true,
                            anticipatePin: 1,
                            onUpdate: self => {
                                const scrollPctValue = self.progress * 100;

                                if (
                                    scrollPctValue > 0 &&
                                    scrollPctValue < 100
                                ) {
                                    setShowButton(true);
                                } else if (scrollPctValue >= 100) {
                                    setShowButton(false);
                                } else {
                                    setShowButton(false);
                                }
                            },
                        },
                    });
                    console.log('Desktop timeline created:', tl);
                }

                if (isMobile) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: '.onchainWorkContainer',
                            start: 'top top',
                            end: '+=3950',
                            pin: true,
                            pinSpacing: false,
                            // markers: true,
                            anticipatePin: 1,
                            onUpdate: self => {
                                const scrollPctValue = self.progress * 100;

                                if (
                                    scrollPctValue > 0 &&
                                    scrollPctValue < 100
                                ) {
                                    setShowButton(true);
                                } else if (scrollPctValue >= 100) {
                                    setShowButton(false);
                                } else {
                                    setShowButton(false);
                                }
                            },
                        },
                    });
                    console.log('Mobile timeline created:', tl);
                }
            },
        );
    });

    return (
        <section>
            <Divider />
            <div className="m:px-5 relative mx-auto min-h-dvh w-full max-w-[78.75rem] px-4  pb-[7.5rem] md:px-4 xl:px-0">
                <div className="onchainWorkContainer !z-[99] bg-[#0c0b1e]">
                    <div className="relative pt-[2rem]">
                        <div className="flex items-center justify-baseline  md:justify-center">
                            <SectionHeadng
                                title=""
                                chirldren={
                                    <p>
                                        How Does{' '}
                                        <span className="text-whitevariant50">
                                            Onchain AI
                                        </span>{' '}
                                        Work?
                                    </p>
                                }
                            />
                        </div>
                        <div className="mt-3 flex items-center justify-baseline md:mt-5 md:justify-center">
                            <p className="font-euclid_regular text-whitevariant50 w-full max-w-[20.9375rem] text-left text-sm leading-[1.3125rem] font-normal md:max-w-[41.25rem] md:text-center md:text-xl md:leading-[1.875rem]">
                                Onchain AI simplifies accessing blockchain data
                                via Oracles. Join innovators building fast
                                applications with data loading in milliseconds.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center  gap-16 md:mt-20">
                    {/* first card  */}
                    <div
                        id="howitWork1Rive1"
                        className="flex w-fit flex-col-reverse gap-6 md:w-full md:flex-row md:items-center md:justify-between md:gap-16"
                    >
                        <div className="flex w-full max-w-[37.25rem] flex-col gap-3">
                            <div className="hidden items-center gap-3 md:flex">
                                <div className="stepLinearGradient w-fit rounded-full p-[1rem]">
                                    <StepIconSVG />
                                </div>
                                <p className="text-whitevariant80 font-euclid_light text-base leading-[1.4rem] font-light">
                                    Step-1
                                </p>
                            </div>

                            <h1 className="font-euclid_medium text-xl leading-[1.5625rem] font-medium -tracking-[0.05375rem] text-white md:text-[2.5rem] md:leading-[3.125rem]">
                                User Sends Request to Smart Contract
                            </h1>

                            <p className="font-euclid_light text-whitevariant80 text-sm leading-[1.4rem] font-light md:text-base">
                                Discover how AI seamlessly collects and verifies
                                off-chain data to enhance decision-making and
                                improve operational efficiency.
                            </p>
                        </div>

                        <div className="w-full max-w-[35.0625rem]">
                            <div className="mb-6 flex items-center gap-3 md:hidden">
                                <div className="stepLinearGradient w-fit rounded-full p-[1rem]">
                                    <StepIconSVG />
                                </div>
                                <p className="text-whitevariant80 font-euclid_light text-base leading-[1.4rem] font-light">
                                    Step-1
                                </p>
                            </div>
                            <div className="onChainWorkLinearGradient border-purplevariant h-[21.3125rem] w-full max-w-[35.0625rem] rounded-[0.9375rem] border">
                                <HowitWork1Rive />
                            </div>
                        </div>
                    </div>

                    <div className="h-[60vh]"></div>

                    {/* second card  */}
                    <div
                        id="howitWork2Rive2"
                        className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-16"
                    >
                        <div className="w-full max-w-[35.0625rem]">
                            <div className="mb-6 flex items-center gap-3 md:hidden">
                                <div className="stepLinearGradient w-fit rounded-full p-[1rem]">
                                    <StepIconSVG />
                                </div>
                                <p className="text-whitevariant80 font-euclid_light text-base leading-[1.4rem] font-light">
                                    Step-2
                                </p>
                            </div>
                            <div className="onChainWorkLinearGradient border-purplevariant h-[21.3125rem] w-full max-w-[35.0625rem] rounded-[0.9375rem] border">
                                <HowitWork2Rive />
                            </div>
                        </div>

                        <div className="flex w-full max-w-[37.25rem] flex-col gap-3">
                            <div className="hidden items-center gap-3 md:flex">
                                <div className="stepLinearGradient w-fit rounded-full p-[1rem]">
                                    <StepIconSVG />
                                </div>
                                <p className="text-whitevariant80 font-euclid_light text-base leading-[1.4rem] font-light">
                                    Step-2
                                </p>
                            </div>

                            <h1 className="font-euclid_medium text-xl leading-[1.5625rem] font-medium -tracking-[0.05375rem] text-white md:text-[2.5rem] md:leading-[3.125rem]">
                                Off-Chain Nodes Detect & Process the Request
                            </h1>

                            <p className="font-euclid_light text-whitevariant80 text-sm leading-[1.4rem] font-light md:text-base">
                                Decentralized nodes work together to efficiently
                                validate and process information, maintaining
                                data integrity and boosting system performance.
                            </p>
                        </div>
                    </div>

                    <div className="h-[60vh]"></div>

                    {/* third card  */}
                    <div
                        id="howitWork3Rive3"
                        className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between md:gap-16"
                    >
                        <div className="flex w-full max-w-[37.25rem] flex-col gap-3">
                            <div className="hidden items-center gap-3 md:flex">
                                <div className="stepLinearGradient w-fit rounded-full p-[1rem]">
                                    <StepIconSVG />
                                </div>
                                <p className="text-whitevariant80 font-euclid_light text-base leading-[1.4rem] font-light">
                                    Step-3
                                </p>
                            </div>

                            <h1 className="font-euclid_medium text-xl leading-[1.5625rem] font-medium -tracking-[0.05375rem] text-white md:text-[2.5rem] md:leading-[3.125rem]">
                                AI Generates Response & Sends It On-Chain
                            </h1>

                            <p className="font-euclid_light text-whitevariant80 text-sm leading-[1.4rem] font-light md:text-base">
                                Effortlessly obtain verified data for your smart
                                contract, ensuring a smooth and seamless
                                experience throughout the process.
                            </p>
                        </div>

                        <div className="w-full max-w-[35.0625rem]">
                            <div className="mb-6 flex items-center gap-3 md:hidden">
                                <div className="stepLinearGradient w-fit rounded-full p-[1rem]">
                                    <StepIconSVG />
                                </div>
                                <p className="text-whitevariant80 font-euclid_light text-base leading-[1.4rem] font-light">
                                    Step-3
                                </p>
                            </div>
                            <div className="onChainWorkLinearGradient border-purplevariant h-[21.3125rem] w-full max-w-[35.0625rem] rounded-[0.9375rem] border">
                                <HowitWork3Rive />
                            </div>
                        </div>
                    </div>

                    <div className="h-[60vh]"></div>

                    {/* fourth card  */}
                    <div
                        id="howitWork4Rive4"
                        className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-16"
                    >
                        <div className="w-full max-w-[35.0625rem]">
                            <div className="mb-6 flex items-center gap-3 md:hidden">
                                <div className="stepLinearGradient w-fit rounded-full p-[1rem]">
                                    <StepIconSVG />
                                </div>
                                <p className="text-whitevariant80 font-euclid_light text-base leading-[1.4rem] font-light">
                                    Step-4
                                </p>
                            </div>
                            <div className="onChainWorkLinearGradient border-purplevariant h-[21.3125rem] w-full max-w-[35.0625rem] rounded-[0.9375rem] border">
                                <HowitWork4Rive />
                            </div>
                        </div>

                        <div className="flex w-full max-w-[37.25rem] flex-col gap-3">
                            <div className="hidden items-center gap-3 md:flex">
                                <div className="stepLinearGradient w-fit rounded-full p-[1rem]">
                                    <StepIconSVG />
                                </div>
                                <p className="text-whitevariant80 font-euclid_light text-base leading-[1.4rem] font-light">
                                    Step-4
                                </p>
                            </div>

                            <h1 className="font-euclid_medium text-xl leading-[1.5625rem] font-medium -tracking-[0.05375rem] text-white md:text-[2.5rem] md:leading-[3.125rem]">
                                User Fetches or Listens to Data on Blockchain
                            </h1>

                            <p className="font-euclid_light text-whitevariant80 text-sm leading-[1.4rem] font-light md:text-base">
                                Discover the dynamic world of blockchain
                                technology with our Real-Time Executive
                                platform, designed to empower leaders with
                                instant insights and analytics.
                            </p>
                        </div>
                    </div>

                    <div className="h-[60vh]"></div>
                </div>

                <div
                    className={cn(
                        'mt-16 flex items-center justify-center',
                        showButton
                            ? 'fixed bottom-[2.5rem] left-0 !z-[99] w-full'
                            : 'relative',
                    )}
                >
                    <PrimaryButton
                        text="LEARN MORE"
                        icon={<CircleDiamondSVG color="white" />}
                        iconClassName="-mt-[1px]"
                        containerClassName={`bg-[#4a35af]  border border-purplevariant max-w-[21rem] w-full md:w-auto`}
                        textClassName="text-white"
                    />
                </div>
            </div>
        </section>
    );
};

export default OnchainWork;
