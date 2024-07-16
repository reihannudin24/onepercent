import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export const ThemeButton = ({lights, onChangeLights}) => {

    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                className="hidden"
                id="btn-light"
                checked={lights}
                onChange={onChangeLights}
            />
            <label htmlFor="btn-light" className="relative inline-flex items-center cursor-pointer">
                <span className="sr-only">Toggle Theme</span>
                <div className={`relative w-16 h-8 ${lights ? 'bg-primary-light' : 'bg-primary '} rounded-full shadow-inner dark:bg-gray-800 transition-colors`}>
                    <div className={`absolute top-1 left-1 w-6 h-6  ${lights ? 'bg-gray-100' : 'bg-blue-950'} rounded-full shadow transform transition-transform ${lights ? 'translate-x-8' : ''}`}></div>
                    <FontAwesomeIcon
                        icon={faMoon}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                    />
                    <FontAwesomeIcon
                        icon={faSun}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-400"
                    />
                </div>
            </label>
        </div>
    );
};
