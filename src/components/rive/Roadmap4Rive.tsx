import { useRive, Layout, Fit } from '@rive-app/react-canvas';

const Roadmap4Rive = () => {
    const { RiveComponent } = useRive(
        {
            src: '/rive/roadmap-4.riv',
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
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <RiveComponent />
        </div>
    );
};

export default Roadmap4Rive;
