import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AboutPicture from '../public/img/AboutPage/AboutPicture.png'
import aboutImage from '../public/img/AboutPage/about.png'
import BeardedMan from '../public/img/AboutPage/BeardedMan.png'
import Boy from '../public/img/AboutPage/Boy.png'
import Cat from '../public/img/AboutPage/Cat.png'
import { AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'



const about = () => {
    return (
        <>
            <Head>
                <title>Nuntium | About</title>
            </Head>
            <div className='mx-6 leading-7'>
                <div className='text-center mt-44'>
                    <span className='bg-black text-white pl-6 pt-4 pr-1 text-2xl'>nu</span>
                    <span className='text-2xl'>ntium.</span>
                    <p className='mt-8 leading-8 text-xl'>A publishing company that focuses <br /> on the essentials.</p>
                </div>
                <div className='bg-black w-full mt-40 sm:h-[1700px] md:h-[1700px] lg:h-[2109px] mb-24 text-white relative'>
                    <div className='hidden border-2 border-white border-solid w-2 bg-white float-right lg:inline-block ] lg:h-3/6 lg:mr-28 xl:h-3/6 xl:mr-64'></div>
                    <Image src={AboutPicture} alt='statue' className='absolute right-0 mt-64 w-5/12 md:mr-28 lg:mr-16 xl:mr-32' />
                    <div className='absolute md:w-[650px] md:ml-12 md:mt-16 lg:ml-24 lg:w-[390px] lg:mt-64 xl:w-[444px]'>
                        <h3 className='hidden lg:inline-block text-4xl'>
                            We tell stories that <br /> drives the heart.
                        </h3>
                        {/* SHOWS ONLY IN MEDIUM SCREEN */}
                        <h3 className='text-3xl md:inline-block lg:hidden'>
                            We tell stories that drives the heart.
                        </h3>
                        <p>
                            Laboris consectetur sunt nulla eiusmod voluptate
                            eiusmod dolor nisi qui dolor cillum fugiat ad.
                            Id sit mollit labore sunt sit culpa qui minim
                            pariatur et officia elit id. Tempor cupidatat
                            veniam esse ad veniam dolore excepteur tempor
                            dolor consectetur ut id.
                        </p>
                    </div>
                    <Image src={aboutImage} alt='image' className='w-5/12 absolute md:mt-[500px] md:ml-40 lg:mt-[520px] lg:ml-40 xl:ml-80' />
                    <div className='absolute w-[650px] md:ml-12 md:mt-[850px] lg:mt-[1000px] lg:ml-60 xl:ml-80'>
                        <h3 className='md:text-3xl lg:text-4xl'>
                            We tell the news that makes the most impact.
                        </h3>
                        <p>
                            Laboris consectetur sunt nulla eiusmod
                            voluptate eiusmod dolor nisi qui dolor
                            cillum fugiat ad. Id sit mollit labore
                            sunt sit culpa qui minim pariatur et
                            officia elit id. Tempor cupidatat veniam
                            esse ad veniam dolore excepteur tempor
                            dolor consectetur ut id.
                        </p>
                    </div>
                    <div className='absolute sm:mt-[1400px] sm:ml-6 md:mt-[1400px] md:ml-12 md:w-[650px] lg:w-[444px] lg:mt-[1400px] ml-60'>
                        <h3 className='md:text-2xl lg:text-3xl'>
                            We share the little moments that shows we&apos;re alive.
                        </h3>
                        <p>
                            Laboris consectetur sunt nulla eiusmod voluptate
                            eiusmod dolor nisi qui dolor cillum fugiat ad.
                            Id sit mollit labore sunt sit culpa qui minim pariatur
                            et officia elit id. Tempor cupidatat veniam esse ad
                            veniam dolore excepteur tempor dolor consectetur ut id.
                        </p>
                    </div>
                    <div className='grid grid-cols-3 absolute gap-6  mb-12 sm:mt-[1100px] md:mt-[1100px] md:mx-12 lg:bottom-0 lg:left-96 lg:mr-20 xl:mr-12 ' >
                        <Image src={Cat} alt='Picture of A cat' />
                        <Image src={Boy} alt='Picture of A Boy Standing' />
                        <Image src={BeardedMan} alt='Picture of a Bearded Man' />
                    </div>
                    <div className='hidden border-2 border-white bg-white border-solid w-2 absolute bottom-0 lg:inline-block lg:ml-28 xl:ml-40 h-[1452px]'></div>
                </div>
                <div className='w-[444px] text-center mx-auto mt-80'>
                    <h3 className='text-4xl'>
                        Because we are you. Humans.
                    </h3>
                    <p className='mt-4'>
                        Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad.
                    </p>
                </div>
                <div className='bg-black w-full mt-64 text-white relative text-center p-32'>
                    <div className='w-96 relative mx-auto'>
                        <h3 className='text-4xl'>want to connect?</h3>
                        <p className='mt-4 leading-7'>
                            Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui..
                        </p>
                        <div className='mt-8 ml-32 flex text-4xl'>
                            <AiOutlineTwitter />
                            <AiOutlineInstagram className='ml-4' />
                            <AiFillLinkedin className='ml-4' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default about