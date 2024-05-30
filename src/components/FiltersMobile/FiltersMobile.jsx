import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline';

const FiltersMobile = ({ mobileFiltersOpen, setMobileFiltersOpen, dynamicFilters, selectedFilters, setSelectedFilters }) => {
    const { t } = useTranslation();

    return (
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
                <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-neutral-900">{t('global.filters')}</h2>
                                <button
                                type="button"
                                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-neutral-400"
                                onClick={() => setMobileFiltersOpen(false)}
                                >
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            {/* Filters mobile */}
                            <form className="mt-4 border-t border-neutral-200">
                                {dynamicFilters.map((section) => (
                                    <Disclosure as="div" key={section.id} className="border-t border-neutral-200 px-4 py-6">
                                        {({ open }) => (
                                        <>
                                            <h3 className="font-medium text-neutral-900">
                                                {section.name}
                                            </h3>
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex items-center mt-10">
                                                        <input
                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                            name={`${section.id}[]`}
                                                            value={option.value}
                                                            type="checkbox"
                                                            checked={selectedFilters[section.id]?.includes(option.value)} // Check if the value is included in selectedFilters
                                                            onChange={(e) => {
                                                                const isChecked = e.target.checked;
                                                                const selectedValues = selectedFilters[section.id] || [];
                                                                const newSelectedValues = isChecked
                                                                    ? [...selectedValues, option.value]
                                                                    : selectedValues.filter(val => val !== option.value);

                                                                setSelectedFilters(prevState => ({
                                                                    ...prevState,
                                                                    [section.id]: newSelectedValues,
                                                                }));
                                                            }}
                                                            className="h-4 w-4 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                        className="ml-3 min-w-0 flex-1 text-neutral-500"
                                                        >
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                        </>
                                        )}
                                    </Disclosure>
                                ))}
                            </form>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default FiltersMobile;
