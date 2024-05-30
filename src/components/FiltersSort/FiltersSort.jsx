import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const FiltersSort = ({ sortOptions, section, setSection }) => {
    const { t } = useTranslation();
    const [ascendingOrder] = useState(true);
    const [activeOption, setActiveOption] = useState(null);

    if (activeOption === null) {
        setActiveOption(sortOptions.find(option => option.value === 'position'));
    }

    const handleSortChange = (selectedOption) => {
        if (section && Array.isArray(section)) {
            if (selectedOption.value === 'title_asc') {
                const sortedSection = [...section].sort((a, b) =>
                    a.title.localeCompare(b.title)
                );
                setSection(sortedSection);
            } else if (selectedOption.value === 'title_desc') {
                const sortedSection = [...section].sort((a, b) =>
                    b.title.localeCompare(a.title)
                );
                setSection(sortedSection);
            } else if (selectedOption.value === 'position') {
                const sortedSection = [...section].sort((a, b) =>
                    ascendingOrder ? a.position - b.position : b.position - a.position
                );
                setSection(sortedSection);
            }
        }
        setActiveOption(selectedOption);
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button
                className="group inline-flex justify-center text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
                {t('global.sort')}
                <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-neutral-400 group-hover:text-neutral-500"
                    aria-hidden="true"
                />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="w-fit absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {sortOptions.map((option) => (
                            <Menu.Item key={option.name}>
                                {() => (
                                    <a href={option.href}
                                        className={`hover:text-neutral-900 ${
                                            activeOption && activeOption.value === option.value
                                                ? 'font-medium text-indigo-600 bg-neutral-100 font-bold'
                                                : 'text-neutral-500'
                                        } block px-4 py-2 text-sm`}
                                        onClick={() => {handleSortChange(option);
                                        }}
                                    >
                                        {option.name}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default FiltersSort;
