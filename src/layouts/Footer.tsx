import Divider from '../components/ui/Divider';
import LogoOnChain from '../components/ui/LogoOnChain';
import { socialData } from '../constants/socialData';

const Footer = () => {
    return (
        <footer>
            <Divider />
            <div className="m:px-5 mx-auto flex w-full max-w-[78.75rem] flex-col items-center justify-between gap-6 px-4 py-[2.8rem] md:flex-row md:px-4 xl:px-0">
                <LogoOnChain isFooter={true} />

                <div className="flex items-center justify-center gap-6">
                    {socialData?.map(social => (
                        <a
                            key={social.id}
                            href={social?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="click block cursor-pointer"
                        >
                            {social?.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
