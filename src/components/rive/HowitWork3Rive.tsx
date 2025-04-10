import {
    Alignment,
    Fit,
    Layout,
    useRive,
    useStateMachineInput,
} from '@rive-app/react-canvas';
import { useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATE_MACHINE_NAME = 'State Machine 1';
const INPUT_NAME = 'Scroll';

const HowitWork3Rive = () => {
    const { rive, RiveComponent } = useRive(
        {
            src: '/rive/how_it_works-3.riv',
            stateMachines: STATE_MACHINE_NAME,
            autoplay: true,
            layout: new Layout({
                fit: Fit.Cover,
                alignment: Alignment.Center,
            }),
        },
        {
            shouldResizeCanvasToContainer: true,
        },
    );

    const scrollInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        INPUT_NAME,
        0,
    );

    useEffect(() => {
        if (!rive || !scrollInput) return;

        const mm = gsap.matchMedia();
        mm.add(
            {
                isDesktop: '(min-width: 768px)',
                isMobile: '(max-width: 767px)',
            },
            context => {
                const { isDesktop, isMobile } = context.conditions || {};

                if (isDesktop) {
                    ScrollTrigger.create({
                        trigger: '#howitWork3Rive3',
                        start: 'top 295',
                        end: '+=500',
                        scrub: 2,
                        pin: true,
                        onUpdate: self => {
                            const scrollPctValue = self.progress * 100;
                            scrollInput.value = scrollPctValue;
                        },
                        anticipatePin: 1,
                        // markers: true,
                    });
                }

                if (isMobile) {
                    ScrollTrigger.create({
                        trigger: '#howitWork3Rive3',
                        start: 'top 200',
                        end: '+=500',
                        scrub: 2,
                        pin: true,
                        onUpdate: self => {
                            const scrollPctValue = self.progress * 100;
                            scrollInput.value = scrollPctValue;
                        },
                        anticipatePin: 1,
                        // markers: true,
                    });
                }
            },
        );
    }, [rive, scrollInput]);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <RiveComponent />
        </div>
    );
};

export default HowitWork3Rive;
