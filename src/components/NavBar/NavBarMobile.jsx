import React, { Fragment, useContext } from "react";
import { Dialog, Tab, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import NavBarLanguage from "./NavBarLanguage";
import NewBadge from "../NewBadge/NewBadge";

// CONTEXT
import { NavBarContext } from '../../context/NavBarContext';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    }

const NavBarMobile = ({ navigation, productions }) => {
    const { t, i18n } = useTranslation();
    const { open, setOpen } = useContext(NavBarContext);

    const balletProductions = productions[i18n.language]?.ballet || [];
    const operaProductions = productions[i18n.language]?.opera || [];

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                        >
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                            <div className="flex px-4 pb-2 pt-5">
                                <button
                                    type="button"
                                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            {/* Links */}
                            <Tab.Group as="div" className="mt-2">
                                <div className="border-b border-gray-200">
                                    <Tab.List className="-mb-px flex space-x-8 px-4">
                                        {navigation.categories.map((category) => (
                                            <Tab
                                            key={category.id}
                                            className={({ selected }) =>
                                                classNames(
                                                selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                                'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                                                )
                                            }
                                            >
                                                {category.name}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels as={Fragment}>
                                        <Tab.Panel className="space-y-10 px-4 pb-8 pt-10">
                                            <div className="grid grid-cols-2 gap-x-4">
                                                {navigation.featured.map((item) => (
                                                    <div key={item.id} className="group relative text-sm">
                                                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                            {/* IMAGE */}
                                                            <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                                            {/* NEW BADGE */}
                                                            {item.new === true
                                                                ? <NewBadge customClass={"m-2"}/>
                                                                : <></>
                                                            }
                                                        </div>
                                                        <Link to={item} className="mt-6 block font-medium text-gray-900">
                                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                            {item.name}
                                                        </Link>
                                                        <p aria-hidden="true" className="mt-1">
                                                            {t('global.see_more')} →
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {t('global.ballet')}
                                                </p>
                                                <ul className="mt-6 flex flex-col space-y-6">
                                                    {balletProductions.map((production, index) => (
                                                        <li key={index} className="flow-root">
                                                            <Link to={`/${i18n.language}/${production.id}`} className="-m-2 block p-2 text-gray-500">
                                                                {t(production.title)}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {t('global.opera')}
                                                </p>
                                                <ul className="mt-6 flex flex-col space-y-6">
                                                    {operaProductions.map((production, index) => (
                                                        <li key={index} className="flow-root">
                                                            <Link to={`/${i18n.language}/${production.id}`} className="-m-2 block p-2 text-gray-500">
                                                                {t(production.title)}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                                {navigation.pages.length === 0
                                    ?   <></>
                                    : <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                        {navigation.pages.map((page) => (
                                            <div key={page.id} className="flow-root">
                                                <Link to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                                    {page.name}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                }
                            <NavBarLanguage/>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default NavBarMobile;