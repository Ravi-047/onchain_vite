import { useRive, Layout, Fit } from '@rive-app/react-canvas';
import { useEffect } from 'react';

const InvestorRive = () => {
    const { rive, RiveComponent } = useRive(
        {
            src: '/rive/for_investors.riv',
            stateMachines: 'State Machine 1',
            autoplay: true,
            layout: new Layout({
                fit: Fit.Contain,
            }),
        },
        {
            shouldResizeCanvasToContainer: true,
        },
    );

    useEffect(() => {
        if (rive) {
            rive.play();
        }
    }, [rive]);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <RiveComponent />
        </div>
    );
};

export default InvestorRive;
