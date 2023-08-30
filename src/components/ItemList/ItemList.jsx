import React, { useState, useEffect, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FunnelIcon, Squares2X2Icon, ListBulletIcon } from '@heroicons/react/20/solid';
import ItemListCardGrid from '../ItemListCardGrid/ItemListCardGrid';
import ItemListCardList from '../ItemListCardList/ItemListCardList';

const ItemList = () => {
    const { t, i18n } = useTranslation();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [isGridView, setIsGridView] = useState(true);
    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
    });
    const [section, setSection] = useState([]);
    const [dynamicFilters, setDynamicFilters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`/locales/${i18n.language}/global.json`);
            const data = await response.json();

            const balletProductions = data.productions.ballet.map(item => ({ ...item, category: 'ballet' }));
            const operaProductions = data.productions.opera.map(item => ({ ...item, category: 'opera' }));
            const mergedProductions = [...operaProductions, ...balletProductions];
                    
            setSection(mergedProductions);

            const uniqueCategories = [...new Set(mergedProductions.map(item => item.category))];

            const newDynamicFilters = [
            {
                id: 'category',
                name: 'Category',
                options: uniqueCategories.map(category => ({
                value: category,
                label: category === 'ballet' ? t('global.ballet') : t('global.opera'),
                checked: selectedFilters['category']?.includes(category) || false,
                })),
            },
            ];

            setSection(mergedProductions);
            setDynamicFilters(newDynamicFilters);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, [t, i18n.language, selectedFilters]);

    const filteredItems = section.filter(item => {
        const categoryFilterValues = selectedFilters['category'] || [];
        return categoryFilterValues.length === 0 || categoryFilterValues.includes(item.category);
    });

    return (
        <div className="bg-white">
            {/* Mobile filter dialog */}
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
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                        type="button"
                                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                        onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    {/* Filters mobile */}
                                    <form className="mt-4 border-t border-gray-200">
                                        {dynamicFilters.map((section) => (
                                            <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                                {({ open }) => (
                                                <>
                                                    <h3 className="font-medium text-gray-900">
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
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                className="ml-3 min-w-0 flex-1 text-gray-500"
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

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    {t('global.exhibitions')}
                </h1>
                <div className="flex items-center">
                    {isGridView ? (
                        <button onClick={() => setIsGridView(false)} type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                            <span className="sr-only">
                                {t('global.view_list')}
                            </span>
                            <ListBulletIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    ) : null}
                    
                    {/* Botón de vista de lista */}
                    {!isGridView ? (
                        <button onClick={() => setIsGridView(true)} type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                            <span className="sr-only">
                                {t('global.view_grid')}
                            </span>
                            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    ) : null}
                    <button
                        type="button"
                        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                        onClick={() => setMobileFiltersOpen(true)}
                    >
                        <span className="sr-only">
                            {t('global.filters')}
                        </span>
                        <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            </div>
            <section aria-labelledby="products-heading" className="pb-24 pt-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                    {/* Filters */}
                    <form className="col-span-1 hidden lg:block">
                        {dynamicFilters.map((section) => (
                        <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                            {({ open }) => (
                            <>
                                <div className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-900">{section.name}</span>
                                </div>
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
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label
                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                        className="ml-3 text-sm text-gray-600"
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
                    <div className='col-span-3'>
                        {/* Grid o list */}
                        {filteredItems.length > 0 ? (
                            isGridView ? (
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 lg:col-span-3 gap-x-5 gap-y-5">
                                    {filteredItems.map(item => (
                                        <ItemListCardGrid key={item.id} item={item} lang={i18n.language} />
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-y-5">
                                    {filteredItems.map(item => (
                                        <ItemListCardList key={item.id} item={item} lang={i18n.language} />
                                    ))}
                                </div>
                            )
                        ) : (
                            <p>No hay elementos que coincidan con los filtros seleccionados.</p>
                        )}
                    </div>
                </div>
            </section>
        </main>
    </div>
    )
}

export default ItemList;