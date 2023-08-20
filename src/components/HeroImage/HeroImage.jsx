import React from "react";

const HeroImage = (props) => {
    return (
        <div 
            className={`relative flex justify-center items-center text-center w-screen bg-no-repeat bg-cover bg-center h-[70vh] text-white`}
            style={
                (props.video === true
                    ?   {}
                    :   {backgroundImage: `url(${props.header})`}
                )}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>            
            <div className="flex flex-col relative z-5 break-words">
                <p className="font-serif text-2xl xs:text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
                    {props.title}
                </p>
                {(props?.subtitle !== null
                    ?   <p className="text-lg mt-10 xs:text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
                            {props.subtitle}
                        </p>
                    :   <></>
                )}
            </div>
            {(props?.video === true
                    ?   <video playsInline autoPlay muted loop className="absolute top-0 left-0 w-screen h-[70vh] object-cover -z-10">
                            <source src={props.headerVideo} type="video/mp4"/>
                        </video>
                    :   <></>
            )}
        </div>
    )
}

export default HeroImage;
