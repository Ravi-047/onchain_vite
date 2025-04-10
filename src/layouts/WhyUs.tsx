import Divider from '../components/ui/Divider';
import { GlowingEffect } from '../components/ui/GlowingEffect';
import SectionHeadng from '../components/ui/SectionHeadng';
import WhyusDataFeedSVG from '../constants/icon/WhyusDataFeedSVG';
import WhyusGlobeSVG from '../constants/icon/WhyusGlobeSVG';
import WhyusMultichainSVG from '../constants/icon/WhyusMultichainSVG';
import WhyusProofSVG from '../constants/icon/WhyusProofSVG';
import WhyusStakingModelSVG from '../constants/icon/WhyusStakingModelSVG';
import ComparisionTable from './ComparisionTable';

import WhyUsBackgroundImage from '/assets/WhyUsBackgroundImage.png';

const WhyUs = () => {
    return (
        <section className="relative overflow-clip">
            <div className="absolute inset-0 -z-20">
                <img
                    src={WhyUsBackgroundImage}
                    alt="why us background image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-[116.26569rem] w-[207.89388rem]"
                />
            </div>
            <Divider />
            <div className="m:px-5 mx-auto min-h-dvh w-full max-w-[78.75rem] px-4 py-[5rem] md:px-4 md:py-[7.5rem] xl:px-0">
                <SectionHeadng title="Why" />
                <SectionHeadng
                    title="Onchain AI?"
                    className="text-whitevariant50"
                />

                <div className="mt-6 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-6 md:grid-rows-2">
                    <div className="md:col-span-2">
                        <WhyusCard
                            icon={<WhyusGlobeSVG />}
                            title="AI-Enhanced Data Verification"
                            description="Combines AI-driven analytics with decentralized oracles."
                        />
                    </div>
                    <div className="md:col-span-2 md:col-start-3">
                        <WhyusCard
                            icon={<WhyusProofSVG />}
                            title="Tamper-Proof & Secure"
                            description="End-to-end encryption ensures data integrity."
                        />
                    </div>
                    <div className="md:col-span-2 md:col-start-5">
                        <WhyusCard
                            icon={<WhyusDataFeedSVG />}
                            title="Lightning-Fast Data Feeds"
                            description="Ultra-low latency for real-time DeFi, trading, and automation."
                        />
                    </div>
                    <div className="md:col-span-3 md:row-start-2">
                        <WhyusCard
                            icon={<WhyusMultichainSVG />}
                            title="Multi-Chain Compatibility"
                            description="Works across Ethereum, Solana, BSC, and Layer 2 solutions."
                        />
                    </div>
                    <div className="row-start-2 md:col-span-3 md:col-start-4">
                        <WhyusCard
                            icon={<WhyusStakingModelSVG />}
                            title="Fair & Transparent Staking Model"
                            description="Rewarding node operators and validators."
                        />
                    </div>
                </div>

                <div className="scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-[#876CF5] scrollbar-track-[#0c0b1e] mt-20 overflow-x-auto overflow-y-hidden py-2 md:mt-[7.5rem] xl:py-0">
                    <ComparisionTable />
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

export const WhyusCard = ({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) => {
    return (
        <div className="border-whitevariant8 whyusCardBackground relative flex h-full flex-col gap-5 rounded-[0.625rem] border-4 px-4 pt-6 pb-8 md:px-6 md:pt-8 md:pb-10">
            {icon}

            <div>
                <h3 className="font-euclid_medium text-xl leading-normal font-medium text-white">
                    {title}
                </h3>
                <p className="text-whitevariant80 font-euclid_light mt-[0.38rem] w-full max-w-[18.75rem] text-base leading-[1.5rem] font-light">
                    {description}
                </p>
            </div>
            <GlowingEffect
                blur={0}
                borderWidth={4}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
            />
        </div>
    );
};
