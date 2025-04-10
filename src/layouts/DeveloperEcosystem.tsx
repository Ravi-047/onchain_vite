import PrimaryButton from '../components/buttons/PrimaryButton';
import Divider from '../components/ui/Divider';
import { GlowingEffect } from '../components/ui/GlowingEffect';
import SectionHeadng from '../components/ui/SectionHeadng';
import DeveloperAPISVG from '../constants/icon/DeveloperAPISVG';
import { cn } from '../lib/tailwindMerge';

const DeveloperEcosystem = () => {
    return (
        <section>
            <Divider />
            <div className="m:px-5 mx-auto min-h-dvh w-full max-w-[78.75rem] px-4 py-[5rem] md:px-4 md:py-[7.5rem] xl:px-0">
                <div className="flex items-center justify-center">
                    <SectionHeadng title="Developers Ecosystem" />
                </div>

                <div className="my-8 md:my-20">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="w-full md:max-w-[32.625rem]">
                            <DeveloperEcosystemCard
                                image="/assets/developerAPIandSDK.png"
                                title="Easy-to-integrate APIs & SDKs"
                                description="Easily connect with our APIs and SDKs."
                                headingClassName="max-w-[14rem] w-full mx-auto"
                            />
                        </div>
                        <div className="w-full">
                            <DeveloperEcosystemCard
                                image="/assets/developerGithubRepo.png"
                                title="Open-source documentation & GitHub repository"
                                description="Check out our open-source docs and GitHub repo."
                                headingClassName="max-w-[20.8rem] w-full mx-auto"
                            />
                        </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 md:flex-row">
                        <div className="w-full">
                            <DeveloperEcosystemCard
                                image="/assets/developerForum.png"
                                title="24/7 support via Telegram & Developer Forums"
                                description="Get 24/7 help via Telegram and Developer Forums."
                                headingClassName="max-w-[21rem] w-full mx-auto"
                            />
                        </div>
                        <div className="w-full md:max-w-[32.625rem]">
                            <DeveloperEcosystemCard
                                image="/assets/developerSmartcontract.png"
                                title="Smart contract templates for instant deployment"
                                description="Smart contract templates for instant deployment."
                                headingClassName="max-w-[19.75rem] w-full mx-auto"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-center md:mt-[2.3rem]">
                    <PrimaryButton
                        text="GET API ACCESS"
                        icon={<DeveloperAPISVG />}
                        iconClassName="-mt-[2px]"
                        containerClassName="bg-purplevariant60 border border-purplevariant max-w-[21rem] w-full md:w-auto"
                        textClassName="text-white"
                    />
                </div>
            </div>
        </section>
    );
};

export default DeveloperEcosystem;

export const DeveloperEcosystemCard = ({
    image,
    title,
    description,
    headingClassName,
}: {
    image: string;
    title: string;
    description: string;
    headingClassName?: string;
}) => {
    return (
        <div className="border-whitevariant8 whyusCardBackground relative flex h-full flex-col items-center  justify-center gap-5 rounded-[0.625rem] border-4 px-9 py-6">
            <div>
                <img
                    src={image}
                    alt="developerEco"
                    width={80}
                    height={80}
                    className="h-[5rem] w-[5rem] object-contain object-center"
                />
            </div>

            <div>
                <h3
                    className={cn(
                        'font-euclid_medium text-center text-xl leading-normal font-medium -tracking-[0.0125rem] text-white md:text-2xl',
                        headingClassName,
                    )}
                >
                    {title}
                </h3>
                <p className="text-whitevariant48  font-euclid_regular mt-[0.56rem] w-full text-center text-[1.125rem]   leading-[1.25rem] font-normal -tracking-[0.00625rem]">
                    {description}
                </p>
            </div>
            <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
            />
        </div>
    );
};
