import React from "react";

const HeroText = (props) => {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 lg:px-10 bg-zinc-100 text-center">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                    <blockquote className="text-xl font-semibold leading-8 text-neutral-900 sm:text-2xl sm:leading-9">
                        {props.text}
                    </blockquote>
                    <figcaption className="mt-10">
                        <div className="text-neutral-600">
                            {props.text2}
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

export default HeroText;
