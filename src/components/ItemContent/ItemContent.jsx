import React from "react";

const ItemContent = ({ category, title, text, image }) => {
    return (
        (text.length >= 1
            ?   <div className="relative isolate overflow-hidden bg-white px-6 py-24 lg:overflow-visible lg:px-0">
                    <div className="mx-auto lg:mx-0 lg:max-w-none grid max-w-2xl gap-x-6 gap-y-8 grid-cols-1 lg:grid-cols-2 lg:items-start">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="lg:max-w-lg">
                                    <p className="text-base font-semibold leading-7 text-indigo-600">
                                        {category}
                                    </p>
                                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                        {title}
                                    </h1>
                                    {text.slice(0, 1).map((text, index) => (
                                        <p key={index} className="mt-6 text-xl leading-8 text-gray-700">
                                            {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="-ml-12 -mt-18 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <img
                                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                src={image}
                                alt={title}
                            />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                    {text.slice(2).map((text, index) => (
                                        <p key={index} className="mt-3">
                                            {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            : <></>
        )
    )
}

export default ItemContent;
