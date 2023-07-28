import { useState, createContext, useContext, Fragment } from 'react';
import { Link } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

const DropDownContext = createContext();

const ResponsiveNavLinkParent = ({ active, children }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };


    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div
                className={`w-full flex flex-col items-start pl-3 pr-4 py-2 border-l-4 ${
                    active
                        ? 'border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700'
                        : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300'
                } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}

            >{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({ children }) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>

            {/*{open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>}*/}
        </>
    );
};

const Content = ({ align = 'right', width = '48', contentClasses = 'py-1 bg-white', children }) => {
    const { open, setOpen } = useContext(DropDownContext);

    let alignmentClasses = 'origin-top';

    if (align === 'left') {
        alignmentClasses = 'origin-top-left left-0';
    } else if (align === 'right') {
        alignmentClasses = 'origin-top-right right-0';
    }

    let widthClasses = '';

    if (width === '48') {
        widthClasses = 'w-48';
    }

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    className="w-full border border-gray-300 mt-3"
                    // className={`absolute z-50 top-14 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
                    onClick={() => setOpen(false)}
                >
                    <div className={`w-full rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses}>
                        {children}
                    </div>
                </div>
            </Transition>
        </>
    );
};

const DropdownLink = ({ href, method, as, children , active}) => {
    return (
        <Link
            href={href}
            method={method}
            as={as}
            className={`block w-full px-4 py-2 text-left text-sm leading-5 ${
                active
                    ? 'bg-gray-100' :''
            }
                text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
};

ResponsiveNavLinkParent.Trigger = Trigger;
ResponsiveNavLinkParent.Content = Content;
ResponsiveNavLinkParent.Link = DropdownLink;

export default ResponsiveNavLinkParent;
