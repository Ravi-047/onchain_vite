import ArticleInsightsCard from '../components/ui/ArticleInsightsCard';
import Divider from '../components/ui/Divider';
import SectionHeadng from '../components/ui/SectionHeadng';

const ArticlesAndInsights = () => {
    const articleInsightsData = [
        {
            id: 'articleInsight1',
            title: 'The Future of AI-Powered Oracles in DeFi',
            link: '/',
            image: '/assets/articleInsightCardImage.png',
        },
        {
            id: 'articleInsight2',
            title: 'How Blockchain & AI Together Create a Secure Data Economy',
            link: '/',
            image: '/assets/articleInsightCardImage.png',
        },
        {
            id: 'articleInsight3',
            title: 'Solving the Oracle Problem: What Makes Onchain AI Different?',
            link: '/',
            image: '/assets/articleInsightCardImage.png',
        },
    ];
    return (
        <section className="">
            <Divider />

            <div className="m:px-5 mx-auto min-h-dvh w-full max-w-[78.75rem] px-4 py-[5rem] md:px-4 md:py-[7.5rem] xl:px-0">
                <div className="flex flex-col gap-5">
                    <SectionHeadng title="Articles and Insights" />
                    <p className="text-whitevariant70 font-euclid_regular l:text-xl l:leading-[1.875rem] w-full max-w-[50rem] text-sm leading-[1.3125rem] font-normal">
                        Explore insightful articles and blogs by Onchain AI that
                        delve into the world of Oracles and Web3 technology.
                        Stay updated with the latest trends and innovations!
                    </p>
                </div>

                <div className="mt-20 flex flex-wrap justify-center gap-10 xl:flex-nowrap">
                    {articleInsightsData?.map(articleInsights => (
                        <ArticleInsightsCard
                            key={articleInsights?.id}
                            title={articleInsights?.title}
                            link={articleInsights?.link}
                            image={articleInsights?.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticlesAndInsights;
