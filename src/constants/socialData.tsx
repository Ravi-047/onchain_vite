import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

export const socialData = [
    {
        id: 'social1',
        name: 'Telegram',
        link: 'https://t.me/OnChainAI',
        icon: <FaTelegramPlane className="text-[1.5rem]" />,
    },
    {
        id: 'social2',
        name: 'Twitter',
        link: 'https://twitter.com/OnChainAI',
        icon: <FaXTwitter className="text-[1.5rem]" />,
    },
    {
        id: 'social3',
        name: 'Facebook',
        link: 'https://www.facebook.com/OnChainAI',
        icon: <FaFacebook className="text-[1.5rem]" />,
    },
    {
        id: 'social4',
        name: 'Instagram',
        link: 'https://www.instagram.com/OnChainAI',
        icon: <FaInstagram className="text-[1.5rem]" />,
    },
];
