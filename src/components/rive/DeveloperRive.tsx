import { Fit, Layout, useRive } from '@rive-app/react-canvas';

const DeveloperRive = () => {
    const { RiveComponent } = useRive(
        {
            src: '/rive/for_developers.riv',
            stateMachines: 'State Machine 1',
            autoplay: true,
            layout: new Layout({
                fit: Fit.Cover,
            }),
        },
        {
            shouldResizeCanvasToContainer: true,
        },
    );

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <RiveComponent />
        </div>
    );
};

export default DeveloperRive;
