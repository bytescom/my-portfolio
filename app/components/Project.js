import Image from 'next/image';
import React from 'react'

const Project = () => {
    return (
        <div className='h-fit w-full'>
            <div className='text-center flex flex-col gap-2 mx-[8rem] border-white border-x-[2px]  dash-v'>
                <h1 className='text-5xl font-extrabold'>Project</h1>
                <p className='text-xl'>see what goes?? How work.</p>
            </div>

            <div className="flex flex-row justify-center gap-8 p-6 border-white border-y-[2px] dash-h">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="relative h-[550px] w-[450px] rounded-3xl overflow-hidden 
                    bg-gray-200 group transition-all duration-500 ease-in-out
                    hover:shadow-2xl hover:ring-4 hover:ring-opacity-50 hover:ring-blue-500"
                    >
                        {/* Image with zoom effect */}
                        <Image
                            src="/pic.jpg"
                            alt={`Gallery item ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 ease-in-out 
                      group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 350px"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Text overlay (appears on hover) */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-10 
                        group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-white text-xl font-bold translate-y-4 opacity-0 
                          group-hover:translate-y-0 group-hover:opacity-100 
                          transition-all duration-300 delay-200">
                                Image Title {index + 1}
                            </h3>
                            <p className="text-white/80 mt-2 translate-y-4 opacity-0 
                         group-hover:translate-y-0 group-hover:opacity-100 
                         transition-all duration-300 delay-300">
                                Description text here
                            </p>
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r 
                          from-transparent via-white/30 to-transparent 
                          group-hover:left-[150%] transition-all duration-1000" />
                        </div>
                    </div>
                ))}
            </div>


            <div className="flex flex-row justify-center gap-8 p-6 border-white border-b-[2px] dash-h">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="relative h-[550px] w-[450px] rounded-3xl overflow-hidden 
                    bg-gray-200 group transition-all duration-500 ease-in-out
                    hover:shadow-2xl hover:ring-4 hover:ring-opacity-50 hover:ring-blue-500"
                    >
                        {/* Image with zoom effect */}
                        <Image
                            src="/pic.jpg"
                            alt={`Gallery item ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 ease-in-out 
                      group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 350px"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Text overlay (appears on hover) */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-10 
                        group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-white text-xl font-bold translate-y-4 opacity-0 
                          group-hover:translate-y-0 group-hover:opacity-100 
                          transition-all duration-300 delay-200">
                                Image Title {index + 1}
                            </h3>
                            <p className="text-white/80 mt-2 translate-y-4 opacity-0 
                         group-hover:translate-y-0 group-hover:opacity-100 
                         transition-all duration-300 delay-300">
                                Description text here
                            </p>
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r 
                          from-transparent via-white/30 to-transparent 
                          group-hover:left-[150%] transition-all duration-1000" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;