
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useState } from 'react';

import './header.css';
import { cn } from '../../lib/tailwindMerge';
import LogoOnChain from '../../components/ui/LogoOnChain';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import UniswapSVG from '../../constants/icon/UniswapSVG';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import CircleDiamondSVG from '../../constants/icon/CircleDiamondSVG';

gsap.registerPlugin(useGSAP);

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navHidden, setNavHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navigationData = [
        {
            id: 'nav1',
            name: 'Documentation',
            link: '/',
        },
        {
            id: 'nav2',
            name: 'PitchDeck',
            link: '/',
        },
        {
            id: 'nav3',
            name: 'Whitepaper',
            link: '/',
        },
        {
            id: 'nav4',
            name: 'Contact',
            link: '/',
        },
    ];

    useEffect(() => {
        // Scroll event listener for hide/show navbar
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                setNavHidden(true);
            } else {
                setNavHidden(false);
            }

            if (currentScrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useGSAP(() => {
        gsap.to('#mainNav', {
            y: navHidden ? '-100%' : 0,
            opacity: navHidden ? 0 : 1,
            duration: 0.3,
            ease: 'power2.inOut',
        });
    }, [navHidden]);

    useGSAP(() => {
        if (isMobileMenuOpen) {
            gsap.fromTo(
                '#mobileMainNav',
                { x: '-100%', autoAlpha: 0 },
                {
                    x: 0,
                    duration: 0.3,
                    ease: 'power2.inOut',
                    autoAlpha: 1,
                },
            );
        } else {
            gsap.fromTo(
                '#mobileMainNav',
                { x: 0, autoAlpha: 1 },
                {
                    x: '-100%',
                    duration: 0.3,
                    autoAlpha: 0,
                    ease: 'power2.inOut',
                },
            );
        }
    }, [isMobileMenuOpen]);

    return (
        <header>
            <nav
                id="mainNav"
                className={cn(
                    'm:px-5 fixed top-0 left-0 !z-[999] flex w-full max-w-[96rem] items-center justify-between bg-transparent px-4 py-4 md:px-4',
                    scrolled ? 'bg-[#0C0B1E] shadow-lg' : '',
                )}
            >
                <LogoOnChain />

                <div className="hidden items-center gap-4 xl:flex">
                    {navigationData?.map(navItem => (
                        <a
                            key={navItem.id}
                            href={navItem.link}
                            className="font-euclid_medium flex w-fit cursor-pointer items-center justify-center px-[0.70488rem] py-[0.9rem] text-sm leading-[0.81063rem] font-medium tracking-[0.0705rem] text-white uppercase"
                        >
                            {navItem.name}
                        </a>
                    ))}

                    <SecondaryButton
                        text="BUY ONCHAIN AI"
                        icon={<UniswapSVG />}
                        iconClassName="-mt-2 aspect-square h-[1rem] w-[2rem]"
                    />
                    <PrimaryButton
                        text="LEARN MORE"
                        icon={<CircleDiamondSVG />}
                        iconClassName="-mt-[2px]"
                    />
                </div>

                <div
                    className={cn(
                        'navMobileMenu cursor-pointer xl:hidden',
                        isMobileMenuOpen ? 'navMobileMenuActive' : '',
                    )}
                    onClick={toggleMobileMenu}
                >
                    <span className="menubar my-1 block h-[3px] w-7 rounded-md bg-[#ffffff] transition-all duration-300 ease-in-out"></span>
                    <span className="menubar my-1 block h-[3px] w-7 rounded-md bg-[#ffffff] transition-all duration-300 ease-in-out"></span>
                    <span className="menubar my-1 block h-[3px] w-7 rounded-md bg-[#ffffff] transition-all duration-300 ease-in-out"></span>
                </div>
            </nav>

            {/* mobile nav  */}
            <nav
                id="mobileMainNav"
                className="s:w-xs fixed top-0 bottom-0 left-0 !z-[9999] h-dvh w-64 max-w-xs overflow-y-auto bg-[#0c0b1e] p-4 backdrop-blur-[10px] xl:hidden"
                style={{ transform: 'translateX(-100%)' }}
            >
                <div>
                    <LogoOnChain />
                </div>
                <div className="mt-8 flex flex-col items-start gap-4">
                    {navigationData?.map(navItem => (
                        <a
                            key={navItem.id}
                            href={navItem.link}
                            className="font-euclid_medium flex w-fit cursor-pointer items-center justify-center px-[0.70488rem] py-[0.9rem] text-sm leading-[0.81063rem] font-medium tracking-[0.0705rem] text-white uppercase"
                        >
                            {navItem.name}
                        </a>
                    ))}

                    <SecondaryButton
                        text="BUY ONCHAIN AI"
                        icon={<UniswapSVG />}
                        iconClassName="-mt-2 aspect-square h-[1rem] w-[2rem]"
                    />
                    <PrimaryButton
                        text="LEARN MORE"
                        icon={<CircleDiamondSVG />}
                        iconClassName="-mt-[2px]"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
