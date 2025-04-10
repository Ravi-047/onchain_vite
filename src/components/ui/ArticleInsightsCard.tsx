import type { FC } from 'react';
import { cn } from '../../lib/tailwindMerge';

type ArticleInsightsCardProp = {
    className?: string;
    title: string;
    link: string;
    image: string;
};

const ArticleInsightsCard: FC<ArticleInsightsCardProp> = ({
    className,
    title,
    link,
    image,
}) => {
    return (
        <div
            className={cn(
                'articleInsightsCard border-purplevariant m:max-w-[25rem] w-full min-w-[18.75rem] rounded-2xl border p-4 md:p-6 xl:max-w-full',
                className,
            )}
        >
            <div className="articleInsightsCardImage pointer-events-none h-[19.5rem] overflow-hidden rounded-2xl">
                <img
                    src={image}
                    alt="cardImage"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="s:object-cover h-full w-full rounded-2xl object-contain object-center"
                />
            </div>

            <p className="font-euclid_medium mt-4 w-full max-w-[21.875rem] text-xl leading-[1.5625rem] font-medium text-white">
                {title}
            </p>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-whitevariant80 font-euclid_light mt-3 block cursor-pointer text-sm leading-[1.25rem] font-light"
            >
                Read Article →
            </a>
        </div>
    );
};

export default ArticleInsightsCard;
