import React from 'react'
import Image from 'next/image'
import Minimalism from '../public/img/Editors Choice/Minimalism.png'

const FeatureArticle = () => {
    return (
        <>
            <div className="bg-article hidden mt-72  md:pb-24 md:block lg:pb-64 xl:object-contain pl-8">
                <div className='left-8 px-6 py-12 sm:w-7/12 bg-white md:w-5/12 pt-6 pb-6 xl:w-2/6'>
                    <p className='text-gray-500'>INTERIOR</p>
                    <h3 className=' md:text-xl lg:text-2xl font-bold'>
                        Laborum Ullamco Sunt id ut Sunt
                    </h3>
                    <div className='my-2'>
                        <p className='text-gray-500 inline-block'>Bessie Hawkins</p>
                        <p className='text-gray-500 inline-block mx-2'>.</p>
                        <p className='text-gray-500 inline-block'>May 7, 2019 (10 mins read)</p>
                    </div>
                    <div>
                        <p className='leading-6'>
                            Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt.
                            Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
                            Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.
                        </p>
                    </div>
                </div>
            </div>
            {/* MOBILE VIEW */}
            <div className='sm:block md:hidden'>
                <h3 className='text-center mt-6 font-bold xsm:text-lg sm:text-2xl md:text-4xl'>
                    Featured Articles
                </h3>
                <div className='xsm:w-12 sm:w-16 border-b-4 border-black border-solid w-24 mx-auto mt-4'></div>

                <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-8 md:hidden">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-light text-gray-600 dark:text-gray-400">May 7, 2019 (10 mins read)</span>
                    </div>
                    <div className="mt-2">
                        <a href="#" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">World&apos;s Most Dangerous Technology Ever Made.</a>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            Proident aliquip velit qui commodo officia qui consectetur
                            dolor ullamco aliquip elit incididunt.
                            Ea minim ex consectetur excepteur.
                            Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
                            Commodo duis dolor anim excepteur.
                            In aliquip mollit nulla consequat velit magna.
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
                        <div className="flex items-center">
                            <Image src={Minimalism} alt="Author Photo" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Ralph Hawkins</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-8 md:hidden">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">May 7, 2019 (10 mins read)</span>
                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">INTERIOR</a>
                </div>
                <div className="mt-2">
                    <a href="#" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Laborum Ullamco Sunt id ut Sunt</a>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt.
                        Ea minim ex consectetur excepteur.
                        Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
                        Commodo duis dolor anim excepteur.
                        In aliquip mollit nulla consequat velit magna.
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
                    <div className="flex items-center">
                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Bessie Hawkins</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureArticle