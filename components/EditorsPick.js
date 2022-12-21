import React from 'react'
import Technology from '../public/img/Editors Choice/Technology.png'
import Minimalism from '../public/img/Editors Choice/Minimalism.png'
import Tower from '../public/img/Editors Choice/Tower.png'
import Image from 'next/image'

const EditorsPick = () => {
    return (
        <>
            <div>
                <h3 className='text-center mt-6 font-bold xsm:text-lg sm:text-2xl md:text-4xl'>
                    Editor's Pick
                </h3>
                <div className='xsm:w-12 sm:w-16 border-b-4 border-black border-solid w-24 mx-auto mt-4'></div>
            </div>

            {/* CARD */}
            <div className='hidden md:block'>
                <div className='grid grid-cols-2 mt-24 md:mx-8 md:h-6 lg:mx-32 xl:mx-64'>
                    <Image className='w-80' src={Minimalism} alt='Minimalism Category' />
                    <div>
                        <p className='font-lighter text-gray-400'>MINIMALISM</p>
                        <p className='font-bold text-xl'>
                            Culpa sit Laboris Exercitation ea Fugiat
                        </p>
                        <div className='my-4 text-gray-400'>
                            <p className='inline-block'>Leslie Pena</p>
                            <p className='inline-block mx-2'>.</p>
                            <p className='inline-block'>April 25, 2022 (6 mins read)</p>
                        </div>
                        <p className='leading-6'>
                            Incididunt occaecat et qui dolore consectetur magna.
                            Lorem veniam ut et labore consequat ut ex sunt.
                            Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit.
                            Anim aute exercitation nisi fugiat.
                            Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.
                        </p>
                    </div>
                </div>
            </div>


            {/* MOBILE SCREEN OF CARD 1 */}
            <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-8 md:hidden">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">April 25, 2022 (6 mins read)</span>
                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">MINIMALISM</a>
                </div>
                <div className="mt-2">
                    <a href="#" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Culpa sit Laboris Exercitation ea Fugiat</a>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Incididunt occaecat et qui dolore consectetur magna.
                        Lorem veniam ut et labore consequat ut ex sunt.
                        Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit.
                        Anim aute exercitation nisi fugiat.
                        Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
                    <div className="flex items-center">
                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Leslie Pena</a>
                    </div>
                </div>
            </div>


            {/* SECOND EDITORS CHOICE CARD */}
            <div className='hidden md:block mt-24'>
                <div className='grid grid-cols-2 mt-72 md:mx-8 md:h-6 lg:mx-32 xl:mx-64'>
                    <Image className='w-80' src={Technology} alt='Technology Category' />
                    <div>
                        <p className='font-lighter text-gray-400 uppercase'>TECHNOLOGY</p>
                        <p className='font-bold text-xl'>
                            Amet non Ex Officia nulla Cupidatat
                        </p>
                        <div className='my-4 text-gray-400'>
                            <p className='inline-block'>Jacob Henry</p>
                            <p className='inline-block mx-2'>.</p>
                            <p className='inline-block'>September 27, 2017 (8 mins read)</p>
                        </div>
                        <p className='leading-6'>
                            Sint anim Lorem aute duis Lorem incididunt.
                            Nulla nostrud irure id ipsum aute excepteur duis sint.
                            Do occaecat sit dolor magna esse.
                            Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem.
                            Deserunt non duis excepteur aliqua duis eu reprehenderit.
                        </p>
                    </div>
                </div>
            </div>


            {/* MOBILE SCREEN OF CARD 2 */}
            <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-8 md:hidden">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">September 27, 2017 (8 mins read)</span>
                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">TECHNOLOGY</a>
                </div>
                <div className="mt-2">
                    <a href="#" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Amet non Ex Officia nulla Cupidatat</a>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Sint anim Lorem aute duis Lorem incididunt.
                        Nulla nostrud irure id ipsum aute excepteur duis sint.
                        Do occaecat sit dolor magna esse.
                        Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem.
                        Deserunt non duis excepteur aliqua duis eu reprehenderit.
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
                    <div className="flex items-center">
                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Jacob Henry</a>
                    </div>
                </div>
            </div>


            {/* THIRD EDITORS CHOICE CARD */}
            <div className='hidden md:block'>
                <div className='grid grid-cols-2 mt-72 md:mx-8 md:h-6 lg:mx-32 xl:mx-64'>
                    <Image className='w-80' src={Tower} alt='Article Category' />
                    <div>
                        <p className='font-lighter text-gray-400'>ARTICLE</p>
                        <p className='font-bold text-xl'>
                            Dolor ex Tempor Cotur Culpa li
                        </p>
                        <div className='my-4 text-gray-400'>
                            <p className='inline-block'>Darrell Lane</p>
                            <p className='inline-block mx-2'>.</p>
                            <p className='inline-block'>May 16, 2017 (3 mins read)</p>
                        </div>
                        <p className='leading-6'>
                            Incididunt occaecat et qui dolore consectetur magna.
                            Lorem veniam ut et labore consequat ut ex sunt.
                            Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit.
                            Anim aute exercitation nisi fugiat.
                            Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.
                        </p>
                    </div>
                </div>
            </div>


            {/* MOBILE SCREEN FOR CARD 3 */}
            <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-8 md:hidden">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">May 16, 2017 (3 mins read)</span>
                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">MINIMALISM</a>
                </div>
                <div className="mt-2">
                    <a href="#" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Dolor ex Tempor Cotur Culpa li</a>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Incididunt sint nulla eu adipisicing eu reprehenderit proident consequat est.
                        Nisi consectetur incididunt mollit officia ut cupidatat laborum proident eu velit Lorem deserunt deserunt voluptate.
                        Proident nostrud laborum reprehenderit culpa irure id labore do ad do minim nisi. Incididunt ex.
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
                    <div className="flex items-center">
                        <Image src={Minimalism} alt="Author Photo" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Darrell Lane</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditorsPick