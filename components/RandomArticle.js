import React from 'react'
import Image from 'next/image'
import waterfall from '../public/img/HomePage/waterfall.png'
import plant from '../public/img/HomePage/plant.png'
import food from '../public/img/HomePage/food.png'
import colorful from '../public/img/HomePage/colorful.png'
import Link from 'next/link'

const RandomArticle = () => {
    return (
        <>
            <div className='ml-16'>
                <div className='hidden md:block'>
                    <div className='grid grid-cols-2 mt-24'>
                        <div>
                            <div className='grid grid-cols-2 gap-16'>
                                <Image className='w-96' src={waterfall} alt='Image Of WaterFall' />
                                <div className='w-96'>
                                    <p className='font-lighter text-gray-400'>NATURE</p>
                                    <p className='font-bold text-xl'>
                                        Tempor deserunt Sunt Qui
                                    </p>
                                    <div className='my-4 text-gray-400'>
                                        <p className='inline-block'>Connie Robertson</p>
                                        <p className='inline-block mx-2'>.</p>
                                        <p className='inline-block'>November 3, 2012</p>
                                    </div>
                                    <p className='leading-6'>
                                        Ea qui dolor aute cupidatat ad pariatur proident.
                                        Mollit nulla tempor aute reprehenderit ut dolore
                                        mollit nisi consequat excepteur ex officia pariatur irure.
                                    </p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-16 mt-8'>
                                <Image className='w-96' src={plant} alt='Image Of Plant' />
                                <div className='w-96'>
                                    <p className='font-lighter text-gray-400'>PLANTS</p>
                                    <p className='font-bold text-xl'>
                                        Occaecat Anim eu Qui
                                    </p>
                                    <div className='my-4 text-gray-400'>
                                        <p className='inline-block'>Eleanor Williamson</p>
                                        <p className='inline-block mx-2'>.</p>
                                        <p className='inline-block'>September 28, 2014</p>
                                    </div>
                                    <p className='leading-6'>
                                        Qui ipsum consectetur ad incididunt et aliquip
                                        exercitation laboris nisi reprehenderit.
                                        Et excepteur commodo esse enim ea aliqua officia reprehenderit.
                                    </p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-16 mt-8'>
                                <Image className='w-96' src={food} alt='Image Of Food' />
                                <div className='w-96'>
                                    <p className='font-lighter text-gray-400'>FOOD</p>
                                    <p className='font-bold text-xl'>
                                        Fugiat Incididunt Voluptate Consequat
                                    </p>
                                    <div className='my-4 text-gray-400'>
                                        <p className='inline-block'>Bessie Watson</p>
                                        <p className='inline-block mx-2'>.</p>
                                        <p className='inline-block'>June 13, 2012</p>
                                    </div>
                                    <p className='leading-6'>
                                        Mollit ea culpa ipsum pariatur eiusmod. Irure et.
                                    </p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-16 mt-8'>
                                <Image className='w-96' src={colorful} alt='Colorful Image' />
                                <div className='w-96'>
                                    <p className='font-lighter text-gray-400'>COLORFUL</p>
                                    <p className='font-bold text-xl'>
                                        Occaecat Anim eu Qui
                                    </p>
                                    <div className='my-4 text-gray-400'>
                                        <p className='inline-block'>Ted Simmmons</p>
                                        <p className='inline-block mx-2'>.</p>
                                        <p className='inline-block'>June 21, 2015</p>
                                    </div>
                                    <p className='leading-6'>
                                        Amet ipsum occaecat aliqua aute nisi laboris
                                        nostrud culpa est do. Aliqua esse velit in
                                        excepteur esse qui voluptate laboris adipisicing
                                        qui irure elit amet excepteur.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='ml-96 leading-10'>
                            <p className='font-bold leading-7'>tags.</p>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Technology</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Open Source</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>JavaScript</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Minimalism</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Self-help</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Animals</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Herbivous</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>HTML</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>CSS</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>PHP</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Web Technologies</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Career</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Life</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Spirituality</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Food</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Cooking</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Sports</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Racing</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Mountain Hiking</Link>
                            <Link href='#' className='mt-1 block hover:font-bold hover:underline'>Cruising</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RandomArticle