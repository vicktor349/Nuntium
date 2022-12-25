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
                <div className='bg-black w-full mt-40 h-[2109px] mb-24 text-white relative'>
                    <div className='border-2 border-white border-solid w-2 h-3/6 bg-white float-right mr-64'></div>
                    <Image src={AboutPicture} alt='statue' className='absolute right-0 mr-32 w-5/12 mt-64' />
                    <div className='w-[444px] ml-24 mt-64 absolute'>
                        <h3 className='text-4xl'>
                            We tell stories that <br /> drives the heart.
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
                    <Image src={aboutImage} alt='image' className='w-5/12 absolute ml-80 mt-[520px]' />
                    <div className='absolute w-[524px] mt-[1000px] ml-80'>
                        <h3 className='text-4xl'>
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
                    <div className='absolute w-[444px] mt-[1400px] ml-60'>
                        <h3 className='text-3xl'>
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
                    <div className='grid grid-cols-3 absolute left-96 gap-6 bottom-0 mb-12' >
                        <Image src={Cat} alt='Picture of A cat' className='h-72' />
                        <Image src={Boy} alt='Picture of A Boy Standing' className='h-72' />
                        <Image src={BeardedMan} alt='Picture of a Bearded Man' className='h-72' />
                    </div>
                    <div className='border-2 border-white bg-white border-solid w-2 absolute bottom-0 ml-40 h-[1452px]'></div>
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