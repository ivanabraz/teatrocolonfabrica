import React from "react";

const DataSheet = ({ datasheet, sliceStart, sliceEnd }) => {
    return (
        (datasheet.length >= 1
            ?   <div className="bg-white py-24 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                            {datasheet.slice(sliceStart, sliceEnd).map((item, index) => (
                                <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                    <dt className="text-base leading-7 text-gray-500">{item.item_title}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{item.item_data}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            : <></>
        )
    )
}

export default DataSheet;
