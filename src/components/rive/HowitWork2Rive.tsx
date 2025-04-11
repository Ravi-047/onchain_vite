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

const HowitWork2Rive = () => {
    const { rive, RiveComponent } = useRive(
        {
            src: '/rive/how_it_works-2.riv',
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
                        trigger: '#howitWork2Rive2',
                        start: 'top 295',
                        end: '+=1000',
                        scrub: 3,
                        pin: true,
                        onUpdate: self => {
                            const easedProgress = gsap.parseEase('power2.out')(
                                self.progress,
                            );
                            const scrollPctValue = easedProgress * 100;
                            scrollInput.value = scrollPctValue;
                        },
                        anticipatePin: 1,
                        // markers: true,
                    });
                }

                if (isMobile) {
                    ScrollTrigger.create({
                        trigger: '#howitWork2Rive2',
                        start: 'top 200',
                        end: '+=1000',
                        scrub: 3,
                        pin: true,
                        onUpdate: self => {
                            const easedProgress = gsap.parseEase('power2.out')(
                                self.progress,
                            );
                            const scrollPctValue = easedProgress * 100;
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

export default HowitWork2Rive;
