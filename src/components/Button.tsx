import { ButtonType } from '../lib/types';

type ButtonProps = {
    type: ButtonType
    children: React.ReactNode
};

export const Button: React.FC<ButtonProps> = ({
    type,
    children
}) => {
    return (
        <button
            aria-label="button"
            className={`md:w-auto md:inline-flex rounded-2xl w-full ${type === ButtonType.NAVBAR
                ? 'py-3 px-2 md:px-4 ml-3 bg-purpleTines text-white hover:bg-darkPurpleTines hover:bg-opacity-90 hover:brightness-110'
                : type === ButtonType.CTA
                    ? 'flex-shrink-0 px-12 py-3 text-base sm:text-lg font-bold text-darkPurpleTines bg-white rounded-2xl hover:bg-gray-100'
                    : null
                } items-center justify-center general-ring-state font-bold`}
        >
            {children}
        </button>
    );
};