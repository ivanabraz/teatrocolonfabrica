import React from 'react';
import { Disclosure } from '@headlessui/react';

const FiltersDesktop = ({ dynamicFilters, selectedFilters, setSelectedFilters, children }) => {
    return (
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="col-span-1 hidden lg:block">
                    {dynamicFilters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-b border-neutral-200 py-6">
                        {({ open }) => (
                        <>
                            <div className="flex w-full items-center justify-between bg-white py-3 text-sm text-neutral-400 hover:text-neutral-500">
                                <span className="font-medium text-neutral-900">{section.name}</span>
                            </div>
                            {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center mt-10">
                                    <input
                                        id={`filter-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        value={option.value}
                                        type="checkbox"
                                        checked={selectedFilters[section.id]?.includes(option.value)}
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
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-neutral-600"
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
                {children}
            </div>
        </section>
    );
}

export default FiltersDesktop;
