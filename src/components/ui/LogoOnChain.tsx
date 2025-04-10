import OnChainSVG from "../../constants/icon/OnChainSVG";
import { cn } from "../../lib/tailwindMerge";


const LogoOnChain = ({
    className,
    isFooter,
}: {
    className?: string;
    isFooter?: boolean;
}) => {
    return (
        <div
            className={cn(
                'flex items-center gap-[0.81rem]',
                isFooter && 'flex-col gap-4 md:flex-row md:gap-[0.81rem]',
                className,
            )}
        >
            <div className="aspect-square h-[2.5rem] w-[2.5rem]">
                <OnChainSVG />
            </div>
            <p className="font-euclid_regular text-xl leading-[1.5rem] font-normal text-white uppercase">
                ON CHAIN <span className="text-[#E9B3F5]">AI</span>
            </p>
        </div>
    );
};

export default LogoOnChain;
