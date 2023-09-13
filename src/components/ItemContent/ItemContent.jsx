import React from "react";
import ReactHtmlParser from "react-html-parser";

const ItemContent = ({ category, title, text }) => {
    return (
        (text.length >= 1
            ?   <div className="relative isolate overflow-hidden bg-white px-6 py-12 flex justify-center">
                    <div className="max-w-3xl gap-x-6 gap-y-8 grid-cols-1 lg:grid-cols-2 lg:items-start">
                        {category !== undefined &&
                            <p className="text-base font-semibold leading-7 ">
                                <span className="text-indigo-600 capitalize">{category}</span><span className="text-gray-600"> / {title}</span>
                            </p>
                        }
                        {text.slice(0, 1).map((text, index) => (
                            <p key={index} className="mt-12 mb-8 text-xl leading-8 text-gray-700">
                                {ReactHtmlParser(text)}
                            </p>
                        ))}
                        {text.slice(2).map((text, index) => (
                            <p key={index} className="mt-3 text-base leading-7 text-gray-600">
                                {ReactHtmlParser(text)}
                            </p>
                        ))}
                    </div>
                </div>
            : <></>
        )
    )
}

export default ItemContent;
