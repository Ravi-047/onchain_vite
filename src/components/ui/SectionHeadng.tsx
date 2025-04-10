import React, { FC } from 'react';
import { cn } from '../../lib/tailwindMerge';

type SectionHeadingProp = {
    className?: string;
    title: string;
    chirldren?: React.ReactNode;
};

const SectionHeadng: FC<SectionHeadingProp> = ({
    className,
    title,
    chirldren,
}) => {
    return (
        <h1
            className={cn(
                'font-euclid_medium l:text-5xl l:leading-[3.75rem] flex items-center text-2xl leading-normal font-medium -tracking-[0.1rem] text-white',
                className,
            )}
        >
            {title} {chirldren}
        </h1>
    );
};

export default SectionHeadng;
