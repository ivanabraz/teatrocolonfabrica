import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';

const MessageBar = (props) => {
    const [show, setShow] = useState(true)
    const [isVisible] = useState(true);

    return isVisible ? (

            <Transition
            show={show}
            leave="transition-all ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-neutral-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                <div className="flex flex-row items-center gap-x-4 gap-y-2">
                    <p className="text-sm leading-6 text-neutral-900">
                        <strong className="font-semibold">
                            {props.textPrimary}
                        </strong>
                        <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        {props.textSecondary}
                    </p>
                    <Link to={props.linkButton} className="flex rounded-full bg-neutral-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                        {props.textButton} <span aria-hidden="true">&rarr;</span>
                    </Link>
                    
                </div>
                <div className="flex flex-1 justify-end">
                    <button
                    type="button"
                    className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                    onClick={() => setShow(!show)}
                    >
                        <span className="sr-only">Cerrar / Dismiss</span>
                        <XMarkIcon className="h-5 w-5 text-neutral-900" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </Transition>
    ) : null;
};

export default MessageBar;
