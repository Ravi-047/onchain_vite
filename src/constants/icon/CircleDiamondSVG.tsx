import { FC } from 'react';

type CircleDiamondSVGProps = {
    color?: string;
};

const CircleDiamondSVG: FC<CircleDiamondSVGProps> = ({ color = 'black' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
        >
            <path
                d="M7.99992 14.6666C4.31792 14.6666 1.33325 11.6819 1.33325 7.99992C1.33325 4.31792 4.31792 1.33325 7.99992 1.33325C11.6819 1.33325 14.6666 4.31792 14.6666 7.99992C14.6666 11.6819 11.6819 14.6666 7.99992 14.6666ZM6.33325 5.99992L4.66659 7.66659L7.99992 10.9999L11.3333 7.66659L9.66659 5.99992H6.33325Z"
                fill={color}
            />
        </svg>
    );
};

export default CircleDiamondSVG;
