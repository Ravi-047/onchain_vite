import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeadng from '../components/ui/SectionHeadng';
import PrimaryButton from '../components/buttons/PrimaryButton';
import EnterprisesIconSVG from '../constants/icon/EnterprisesIconSVG';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const DemoVideo = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.demoVideoContainer',
                start: 'top 80%',
                end: 'bottom 20%',
                // markers: true,
                toggleActions: 'play none none reverse',
            },
        });

        tl.from('.demoVideo', {
            y: 100,
            duration: 0.6,
        });
    });
    return (
        <section>
            <div className="m:px-5 relative mx-auto min-h-[50vh] w-full max-w-[78.75rem] px-4 pb-[5rem] md:min-h-dvh md:px-4 md:pb-[7.5rem] xl:px-0">
                <div className="flex items-center justify-baseline md:justify-center">
                    <SectionHeadng
                        title=""
                        chirldren={
                            <p>
                                Witness{' '}
                                <span className="text-whitevariant50">
                                    Onchain AI
                                </span>{' '}
                                in Action?
                            </p>
                        }
                    />
                </div>
                <div className="mt-3 flex items-center justify-baseline md:mt-5 md:justify-center">
                    <p className="font-euclid_regular text-whitevariant50 w-full max-w-[20.9375rem] text-left text-sm leading-[1.3125rem] font-normal md:max-w-[41.25rem] md:text-center md:text-xl md:leading-[1.875rem]">
                        Onchain AI simplifies accessing blockchain data via
                        Oracles. Join innovators building fast applications with
                        data loading in milliseconds.
                    </p>
                </div>
                <div className="demoVideoContainer mx-auto mt-[2.5rem] w-full max-w-[78.75rem]">
                    <div className="border-purplevariant demoVideo videoLinearGradient w-full rounded-2xl border p-3 md:rounded-3xl md:border-2 md:p-6">
                        <div className="h-[13.75rem] w-full rounded-[0.875rem] bg-black md:h-[35rem]"></div>

                        <div className="mt-4 flex items-center justify-center md:mt-[2.3rem]">
                            <PrimaryButton
                                text="Request Demo"
                                icon={<EnterprisesIconSVG />}
                                iconClassName="-mt-[1px]"
                                containerClassName="bg-purplevariant60 border border-purplevariant max-w-[21rem] w-full md:w-auto"
                                textClassName="text-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoVideo;
