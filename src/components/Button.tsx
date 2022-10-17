import { ButtonType } from '@/lib/types';

type ButtonProps = {
    buttonType: ButtonType
    children: React.ReactNode
};

export const Button: React.FC<ButtonProps> = ({
    buttonType,
    children
}) => {
    return (
        <button
            aria-label="button"
            type="button"
            className={`md:w-auto md:inline-flex rounded-2xl w-full ${buttonType === ButtonType.HEADER
                ? 'py-3 px-2 md:px-4 ml-3 bg-indigo-500 bg-opacity-80 text-white hover:bg-indigo-600 hover:bg-opacity-80'
                : buttonType === ButtonType.CTA
                    ? 'flex-shrink-0 px-12 py-3 text-lg font-bold text-indigo-800 bg-white rounded-2xl hover:bg-gray-200'
                    : null
                } items-center justify-center general-ring-state font-bold`}
        >
            {children}
        </button>
    );
};