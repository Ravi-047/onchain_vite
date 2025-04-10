import type { FC, ReactElement } from 'react';
import { cn } from '../../lib/tailwindMerge';

type SecondaryButtonProps = {
    text: string;
    icon?: ReactElement;
    containerClassName?: string;
    textClassName?: string;
    iconClassName?: string;
};

const SecondaryButton: FC<SecondaryButtonProps> = ({
    text,
    icon,
    containerClassName,
    textClassName,
    iconClassName,
}) => {
    return (
        <button
            className={cn(
                'primaryButton flex cursor-pointer items-center justify-center gap-[0.4rem] rounded-[6.25rem] border border-white px-[1.2rem] py-[0.9rem]',
                containerClassName,
            )}
        >
            <p
                className={cn(
                    'font-euclid_medium text-sm  leading-[0.81063rem] font-medium tracking-[0.0705rem] text-nowrap text-white uppercase',
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

export default SecondaryButton;
