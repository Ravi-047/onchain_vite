import type { FC, ReactElement } from 'react';
import { cn } from '../../lib/tailwindMerge';

type PrimaryButtonProps = {
    text: string;
    icon?: ReactElement;
    containerClassName?: string;
    textClassName?: string;
    iconClassName?: string;
    animationClass?: string;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({
    text,
    icon,
    containerClassName,
    iconClassName,
    textClassName,
    animationClass,
}) => {
    return (
        <button
            className={cn(
                'primaryButton flex cursor-pointer items-center justify-center gap-[0.4rem] rounded-[6.25rem] bg-white px-[1.2rem] py-[0.9rem]',
                containerClassName,
                animationClass,
            )}
        >
            <p
                className={cn(
                    'font-euclid_medium text-sm  leading-[0.81063rem] font-medium tracking-[0.0705rem] text-nowrap text-black uppercase',
                    textClassName,
                )}
            >
                {text}
            </p>
            <span className={cn('h-[1rem] w-[1rem]', iconClassName)}>
                {icon}
            </span>
        </button>
    );
};

export default PrimaryButton;
