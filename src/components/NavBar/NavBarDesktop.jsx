import React, { Fragment } from "react";
import { Popover, Transition } from '@headlessui/react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import NewBadge from "../NewBadge/NewBadge";
import NavBarReturn from "./NavBarReturn";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBarDesktop = ({ navigation, productions, children }) => {
    const { t, i18n } = useTranslation();

    const balletProductions = productions[i18n.language]?.ballet || [];
    const operaProductions = productions[i18n.language]?.opera || [];

    return (
        <>
        <Popover.Group className="hidden w-full lg:block">
            <div className="flex justify-between h-full items-center">
                <div className="flex space-x-8">
                    {navigation.categories.map((category) => (
                        <Popover key={category.id} className="flex">
                            {({ open }) => (
                                <>
                                    <div className="relative flex">
                                        <Popover.Button
                                            className={classNames(
                                                open
                                                    ? 'border-indigo-600 text-indigo-600'
                                                    : 'border-transparent text-white focus:outline-none hover:text-gray-300',
                                                'relative z-70 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                            )}
                                        >
                                            {category.name}
                                        </Popover.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 z-10">
                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                                            <div className="relative bg-white">
                                                <div className="mx-auto max-w-7xl">
                                                    <div className="grid grid-cols-2 py-16 px-10">
                                                        <div className="grid grid-cols-2">
                                                            <div className="">
                                                                <p className="mb-5 font-medium text-gray-900">
                                                                    {t('global.ballet')}
                                                                </p>
                                                                {balletProductions.map((production, index) => (
                                                                    <Link to={`/${i18n.language}/${production.id}`} className="flex mb-5" key={index}>
                                                                        {t(production.title)}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                            <div className="">
                                                                <p className="mb-5 font-medium text-gray-900">
                                                                    {t('global.opera')}
                                                                </p>
                                                                {operaProductions.map((production, index) => (
                                                                    <Link to={`/${i18n.language}/${production.id}`} className="flex mb-5" key={index}>
                                                                        {t(production.title)}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-x-8">
                                                            {navigation.featured.map((item) => (
                                                                <Link key={item.id} to={`/${i18n.language}/${item.id}`} className="group relative text-base sm:text-sm">
                                                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                        {/* IMAGE */}
                                                                        <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center"/>
                                                                        {/* NEW BADGE */}
                                                                        {item.new === true
                                                                            ? <NewBadge customClass={"m-2"}/>
                                                                            : <></>
                                                                        }
                                                                    </div>
                                                                    <p className="mt-6 block font-medium text-gray-900">
                                                                        <span className="absolute inset-0 z-70" aria-hidden="true" />
                                                                        {item.name}
                                                                    </p>
                                                                    <p aria-hidden="true" className="mt-1">
                                                                        {t('global.see_more')} →
                                                                    </p>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    ))}
                    {navigation.pages.length === 0
                        ?   <></>
                        :   navigation.pages.map((page) => (
                                <Link
                                    key={page.name}
                                    to={page.href}
                                    className="flex items-center text-sm font-medium text-white hover:text-gray-300"
                                >
                                    {page.name}
                                </Link>
                            ))
                    }
                    <NavBarReturn/>
                </div>
                {children}
            </div>
        </Popover.Group>
        </>
    );
};

export default NavBarDesktop;
